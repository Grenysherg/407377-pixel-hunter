import {LIVE_NUMBER} from "../game/game-data";
import {initGreeting} from '../screens/greeting';

export const initHeaderTemplate = (gameState) => {
  return `<header class="header js-header">
      <div class="header__back js-header-back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
      ${gameState ?
    `<h1 class="game__timer">${gameState.time}</h1>
      <div class="game__lives">
        ${Array(LIVE_NUMBER - gameState.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
        ${Array(gameState.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
      </div>` : ``}
    </header>`;
};

export const initHeaderEvents = () => {
  const headerElement = document.querySelector(`.js-header`);
  const backElement = headerElement.querySelector(`.js-header-back`);

  backElement.addEventListener(`click`, () => {
    initGreeting();
  });
};
