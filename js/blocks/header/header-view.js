import AbstractView from '../../abstract-view';
import {GameParameter} from "../../data";

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this._state = state;
  }

  get template() {
    const stateTemplate = this._state ?
      `<h1 class="game__timer">${this._state.time}</h1>
      <div class="game__lives">
        ${Array(GameParameter.LIVES - this._state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
        ${Array(this._state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
      </div>` : ``;

    return `<header class="header js-header">
      <div class="header__back js-header-back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
      ${stateTemplate}
    </header>`;
  }

  bind() {
    this._element.querySelector(`.js-header-back`).addEventListener(`click`, this.onBackClick);
  }

  onBackClick() {}
}
