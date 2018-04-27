import AbstractView from '../abstract-view';

export default class IntroView extends AbstractView {
  get template() {
    return `<div class="central__content">
        <div class="intro js-intro">
          <h1 class="intro__asterisk js-intro-asterisk">*</h1>
          <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
        </div>
      </div>`;
  }

  bind() {
    this._element.querySelector(`.js-intro-asterisk`).addEventListener(`click`, this.onAsteriskClick);
  }

  onAsteriskClick() {}
}
