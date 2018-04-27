import AbstractView from '../abstract-view';
import {Score} from '../data';

export default class StatsView extends AbstractView {
  constructor(totalScore, bonuseScore, answersElement) {
    super();
    this._totalScore = totalScore;
    this._bonuseScore = bonuseScore;
    this._answersElement = answersElement;
  }

  get template() {
    const bonusFastTemplate = this._bonuseScore.fast.number
      ? `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${this._bonuseScore.fast.number}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;${Score.FAST_ANSWER}</td>
          <td class="result__total">${this._bonuseScore.fast.score}</td>
        </tr>` : ``;

    const bonusLifeTemplate = this._bonuseScore.life.number
      ? `<tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${this._bonuseScore.life.number}&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;${Score.LIFE}</td>
          <td class="result__total">${this._bonuseScore.life.score}</td>
        </tr>` : ``;

    const bonusSlowTemplate = this._bonuseScore.slow.number
      ? `<tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${this._bonuseScore.slow.number}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;${Score.SLOW_ANSWER}</td>
          <td class="result__total">${this._bonuseScore.slow.score}</td>
        </tr>` : ``;

    const resultTemplate = this._totalScore !== -1
      ? `<tr>
         <td class="result__number">1.</td>
         <td class="js-answers-container" colspan="2"></td>
          <td class="result__points">×&nbsp;${Score.CORRECT_ANSWER}</td>
          <td class="result__total">${this._bonuseScore.correct.score}</td>
       </tr>
       ${bonusFastTemplate}
       ${bonusLifeTemplate}
       ${bonusSlowTemplate}
       <tr>
          <td colspan="5" class="result__total result__total--final">${this._totalScore}</td>
        </tr>`
      : `<tr>
          <td class="result__number">1.</td>
          <td class="js-answers-container" colspan="2"></td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">fail</td>
          </tr>`;

    return `<div class="result">
      ${this._totalScore !== -1 ? `<h1>Победа!</h1>` : ``}
      <table class="result__table">
        ${resultTemplate}
      </table>
    </div>`;
  }

  addAnswers() {
    this.element.querySelector(`.js-answers-container`).appendChild(this._answersElement);
  }
}
