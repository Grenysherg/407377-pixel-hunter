const RIGHT_ARROW_CODE = 39;
const LEFT_ARROW_CODE = 37;

const SCREEN_TEMPLATE_CLASS = `.js-screen-template`;

const MIN_TEMPLATE_NUMBER = 1;
const TEMPLATE_NUMBER = document.querySelectorAll(SCREEN_TEMPLATE_CLASS).length;
const INITIAL_SCREEN_INDEX = 1;

const mainElement = document.querySelector(`.js-main`);

const screenTemplates = [];

let currentScreenIndex = 0;

const createScreenArray = () => {
  for (let i = MIN_TEMPLATE_NUMBER; i <= TEMPLATE_NUMBER; i++) {
    screenTemplates.push(document.querySelector(`${SCREEN_TEMPLATE_CLASS}[data-index="${i}"`).content);
  }
};

const showScreen = (screenIndex) => {
  currentScreenIndex = screenIndex;

  mainElement.innerHTML = ``;
  mainElement.appendChild(screenTemplates[currentScreenIndex - 1].cloneNode(true));
};

const addScreenSwitch = () => {
  document.addEventListener(`keydown`, (event) => {
    if (event.altKey) {
      if (event.keyCode === RIGHT_ARROW_CODE) {
        let screenIndex = currentScreenIndex + 1;

        if (screenIndex <= TEMPLATE_NUMBER) {
          showScreen(screenIndex);
        }
      }

      if (event.keyCode === LEFT_ARROW_CODE) {
        let screenIndex = currentScreenIndex - 1;

        if (screenIndex >= MIN_TEMPLATE_NUMBER) {
          showScreen(screenIndex);
        }
      }
    }
  });
};

createScreenArray();
showScreen(INITIAL_SCREEN_INDEX);
addScreenSwitch();
