import showScreen from '../common/show-screen';
import {initHeaderTemplate, initHeaderEvents} from "../blocks/header";
import {initGame} from "../game/game-data";

const DISABLED_ATTRIBUTE_NAME = `disabled`;

const template =
  `<div class="rules js-rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится 30 секунд.<br>
        Ошибиться можно не более 3 раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input js-rules-input" type="text" placeholder="Ваше Имя">
        <button class="rules__button continue js-rules-button" type="submit" disabled>Go!</button>
      </form>
    </div>`;

export const initRules = () => {
  showScreen(initHeaderTemplate() + template, () => {
    initHeaderEvents();

    const rulesElement = document.querySelector(`.js-rules`);
    const inputElement = rulesElement.querySelector(`.js-rules-input`);
    const buttonElement = rulesElement.querySelector(`.js-rules-button`);

    const onButtonClick = (event) => {
      event.preventDefault();
      initGame();
    };

    const toggleButtonStable = (isButtonActive) => {
      if (isButtonActive) {
        buttonElement.removeAttribute(DISABLED_ATTRIBUTE_NAME);
        buttonElement.addEventListener(`click`, onButtonClick);
      } else {
        buttonElement.setAttribute(DISABLED_ATTRIBUTE_NAME, DISABLED_ATTRIBUTE_NAME);
        buttonElement.removeEventListener(`click`, onButtonClick);
      }
    };

    inputElement.addEventListener(`input`, () => {
      if (inputElement.value.trim()) {
        toggleButtonStable(true);
      } else {
        toggleButtonStable(false);
      }
    });
  });
};
