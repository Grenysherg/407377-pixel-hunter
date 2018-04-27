import GameView from '../../game-view';

export default class Game1View extends GameView {
  constructor(content) {
    super(content);
  }

  get template() {
    const options = [];

    this.images.forEach((it, index) => {
      options.push(this.getRadioOptionTemplate(it, index + 1));
    });

    return `<div class="game js-game">
      ${this.textTemplate}
      <form class="game__content js-game-form">
        ${options.join(``)}
      </form>
    </div>`;
  }

  bind() {
    this._element.querySelector(`.js-game-form`).addEventListener(`change`, this.onRadioClick);
  }

  onRadioClick() {}
}
