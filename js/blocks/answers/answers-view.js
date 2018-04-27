import AbstractView from '../../abstract-view';
import {GameParameter} from '../../data';

export default class AnswersView extends AbstractView {
  constructor(answerTypes) {
    super();
    this._answerTypes = answerTypes;
  }

  get template() {
    const answerTemplates = [];

    for (const it of this._answerTypes) {
      answerTemplates.push(`<li class="stats__result stats__result--${it}"></li>`);
    }

    Array.prototype.push.apply(answerTemplates, Array(GameParameter.GAMES - this._answerTypes.length).fill(`<li class="stats__result stats__result--unknown"></li>`));

    return `<ul class="stats">
             ${answerTemplates.join(``)}
           </ul>`;
  }
}
