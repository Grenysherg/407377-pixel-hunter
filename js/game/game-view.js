import AbstractView from '../abstract-view';

export default class GameView extends AbstractView {
  constructor(content) {
    super();
    this.text = content.text;
    this.images = content.images;
  }

  get textTemplate() {
    return `<p class="game__task">${this.text}</p>`;
  }

  getRadioOptionTemplate(image, index) {
    return `<div class="game__option js-game-option-${index}">
          <img class="js-image" src="${image.url}" alt="Option ${index}" width="${image.width}" height="${image.height}" data-type="${image.type}">
          <label class="game__answer game__answer--photo">
            <input class="js-radio" name="question${index}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input class="js-radio" name="question${index}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>`;
  }

  getImageOptionTemplate(image, index) {
    return `<div class="game__option">
          <img class="js-image" src="${image.url}" alt="Option ${index}" width="${image.width}" height="${image.height}" data-type="${image.type}">
        </div>`;
  }
}
