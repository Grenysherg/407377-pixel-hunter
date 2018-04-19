import showScreen from '../common/show-screen';
import {initGreeting} from "./greeting";

const template =
    `<div class="central__content">
        <div class="intro js-intro">
          <h1 class="intro__asterisk js-intro-asterisk">*</h1>
          <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
        </div>
      </div>`;

export const initIntro = () => {
  showScreen(template, () => {
    const introElement = document.querySelector(`.js-intro`);
    const asteriskElement = introElement.querySelector(`.js-intro-asterisk`);

    asteriskElement.addEventListener(`click`, () => {
      initGreeting();
    });
  });
};
