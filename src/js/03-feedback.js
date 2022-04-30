import throttle from 'lodash.throttle'; // подлючаем метод из библиотеки lodash.throttle

const form = document.querySelector('.feedback-form'); // получаем форму
const FORM_STORAGE_KEY = 'feedback-form-state'; // получаем состояние формы
let formState = {}; // объявляем переменную состояния формы

form.addEventListener('input', throttle(handleFormInput, 500)); // подписываемся на событие input и обрабатываем его через throttle
form.addEventListener('submit', handleFormSubmit); // подписываемся на событие submit и обрабатываем его
isData(); 

function handleFormInput(event) { // обрабатываем событие input
  const { name, value } = event.target; // получаем имя и значение поля
  formState[name] = value; // записываем в состояние формы имя и значение поля
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formState)); // записываем в localStorage имя и значение поля
}

function isData() { // проверяем есть ли данные в localStorage
    return Object.keys(formState).length > 0; // проверяем есть ли в состоянии формы данные
}

function handleFormSubmit(event) {
    event.preventDefault(); // отменяем действие по умолчанию
    const formData = getData(); // получаем данные из формы
    console.log(formData); // выводим данные в консоль
    formState = {}; // обнуляем состояние формы
    
}

function getData() {
    if (localStorage.getItem(FORM_STORAGE_KEY)) { // проверяем есть ли данные в localStorage
        return JSON.parse(localStorage.getItem(FORM_STORAGE_KEY)); // если есть данные в localStorage парсим их в объект
    }
    return {}; // если данных нет в localStorage возвращаем пустой объект
}

