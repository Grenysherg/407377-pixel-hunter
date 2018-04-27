import AbstractView from '../abstract-view';
import {GameParameter, AnswerTime} from "../data";

const DISABLED_ATTRIBUTE_NAME = `disabled`;

export default class RulesView extends AbstractView {
  get template() {
    return `<div class="rules js-rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай ${GameParameter.GAMES} раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится ${AnswerTime.MAX} секунд.<br>
        Ошибиться можно не более ${GameParameter.LIVES} раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input js-rules-input" type="text" placeholder="Ваше Имя">
        <button class="rules__button continue js-rules-button" type="submit" disabled>Go!</button>
      </form>
    </div>`;
  }

  bind() {
    this._inputElement = this._element.querySelector(`.js-rules-input`);
    this._buttonElement = this._element.querySelector(`.js-rules-button`);

    this._inputElement.addEventListener(`input`, this.onNameInput);
    this._buttonElement.addEventListener(`click`, this.onButtonClick);
  }

  changeButtonStable(isDisabled) {
    if (isDisabled) {
      this._buttonElement.setAttribute(DISABLED_ATTRIBUTE_NAME, DISABLED_ATTRIBUTE_NAME);
      this._buttonElement.removeEventListener(`click`, this.onButtonClick);
    } else {
      this._buttonElement.removeAttribute(DISABLED_ATTRIBUTE_NAME);
      this._buttonElement.addEventListener(`click`, this.onButtonClick);
    }
  }

  onNameInput() {}

  onButtonClick() {}
}
