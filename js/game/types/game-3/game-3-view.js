import GameView from '../../game-view';

export default class Game3View extends GameView {
  constructor(content) {
    super(content);
  }

  get template() {
    const options = [];

    this.images.forEach((it, index) => {
      options.push(this.getImageOptionTemplate(it, index));
    });

    return `<div class="game js-game">
      ${this.textTemplate}
      <form class="game__content game__content--tripl js-game-form">
        ${options.join(``)}
      </form>
    </div>`;
  }

  bind() {
    this._element.querySelector(`.js-game-form`).addEventListener(`click`, this.onImageClick);
  }

  onImageClick() {}
}
