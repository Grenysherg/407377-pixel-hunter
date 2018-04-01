import getContentElement from './get-content-element';
import showScreen from './show-screen';
import {initHeader} from "./header";
import {initGame1} from './game-1';

const DISABLED_ATTRIBUTE_NAME = `disabled`;

const rulesContent = getContentElement(
    `<header class="header js-header">
      <div class="header__back js-header-back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
    </header>
    <div class="rules js-rules">
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
    </div>
    <footer class="footer">
      <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
      <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
      <div class="footer__social-links">
        <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
        <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
        <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
        <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
      </div>
    </footer>`);

const initRules = () => {
  showScreen(rulesContent);
  initHeader();

  const rulesElement = document.querySelector(`.js-rules`);
  const inputElement = rulesElement.querySelector(`.js-rules-input`);
  const buttonElement = rulesElement.querySelector(`.js-rules-button`);

  const onButtonClick = () => {
    initGame1();
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
};

export default rulesContent;
export {initRules};
