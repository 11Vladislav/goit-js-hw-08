import Player from '@vimeo/player'; // подключаем библиотеку для работы с видео
import throttle from 'lodash.throttle';  // подключаем метод из библиотеки для обработки изменения времени видео

const iframe = document.querySelector('iframe'); // подключаем видео к плееру
const player = new Vimeo.Player(iframe);  // подключаем обработчик изменения времени видео
const CURRENT_POINT = 'videoplayer-current-time'; // записываем в хранилище время просмотра видео

player.on('timeupdate', throttle(onTimeUpdate, 1000)); // устанавлием слушатель на обработчик изменения времени видео
pageInit(); // вызываем обработчик изменения времени видео

function onTimeUpdate(data) { // обработчик изменения времени видео
  localStorage.setItem(CURRENT_POINT, data.seconds); // записываем в хранилище время просмотра видео
}

function pageInit() { // обработчик изменения времени видео
    const currentTime = localStorage.getItem(CURRENT_POINT); // получаем время просмотра видео из хранилища
    if (currentTime) { // если время просмотра видео есть в хранилище
        player.setCurrentTime(currentTime); // перемотаем видео на время просмотра из хранилища
    }
}