// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery'); // получение элемента галереи
galleryCreate(galleryItems, galleryEl); // создание галереи

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 }); // подключение модального окна к галерее

function galleryCreate(list, place) { // функция создания галереи
    const markup = list.map(event => // подстановка данных из массива в шаблон
        `<a class="gallery__item" href="${event.original}"
         onclick="event.preventDefault()">
        <img class="gallery__image" src="${event.preview}" 
        alt="${event.description}" />
        </a>`).join(''); // создание строки из массива
  place.innerHTML = markup; // вставка строки в элемент галереи
}
