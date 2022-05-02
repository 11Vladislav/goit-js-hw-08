import throttle from 'lodash.throttle'; // подлючаем метод из библиотеки lodash.throttle

const LOCAL_STORAGE_KEY = 'feedback-form-state'; // ключ для сохранения данных в localStorage

const refs = { // объявляем объект с помощью ключей и значениями
    form: document.querySelector('.feedback-form'), // объявляем элемент по классу
};

refs.form.addEventListener('input', throttle(handleInput, 500)); // подписываемся на событие и вызываем функцию по клику на кнопку
refs.form.addEventListener('submit', handleSubmit); // подписываемся на событие и вызываем функцию по клику на кнопку

if (localStorage.getItem(LOCAL_STORAGE_KEY)) {  // если есть данные в localStorage
    const state = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); // преобразуем данные в объект
    refs.form.elements.email.value = state.email; // записываем данные в элемент
    refs.form.elements.message.value = state.message; // записываем данные в элемент
}

function handleInput(event) { // при вводе данных в форму
    const state = { // объявляем объект с помощью ключей и значениями
        email: refs.form.elements.email.value, // объявляем элемент по классу
        message: refs.form.elements.message.value, // объявляем элемент по классу
    };

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state)); // записываем данные в localStorage
}

function handleSubmit(event) { // при отправке формы
    event.preventDefault(); // отменяем действие по умолчанию

    const state = { // объявляем объект с помощью ключей и значениями
        email: refs.form.elements.email.value, // объявляем элемент по классу
        message: refs.form.elements.message.value, // объявляем элемент по классу
    };

    console.log(state); // выводим данные в консоль
    event.currentTarget.reset(); // очищаем форму
}

