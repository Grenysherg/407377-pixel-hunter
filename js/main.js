const SCREEN_TEMPLATES = [
  document.querySelector(`#greeting`).content,
  document.querySelector(`#rules`).content,
  document.querySelector(`#game-1`).content,
  document.querySelector(`#game-2`).content,
  document.querySelector(`#game-3`).content,
  document.querySelector(`#stats`).content,
];

const RIGHT_ARROW_CODE = 39;
const LEFT_ARROW_CODE = 37;

const mainElement = document.querySelector(`.js-main`);

let currentScreenIndex = null;

const showScreen = (screenIndex) => {
  currentScreenIndex = screenIndex;

  mainElement.innerHTML = ``;
  mainElement.appendChild(SCREEN_TEMPLATES[currentScreenIndex - 1].cloneNode(true));
};

const checkScreenIndex = (index) => {
  return index >= 1 && index <= SCREEN_TEMPLATES.length;
};

document.addEventListener('keydown', function (event) {
  if (event.altKey) {
    if (event.keyCode === RIGHT_ARROW_CODE) {
      let screenIndex = currentScreenIndex + 1;

      if (checkScreenIndex(screenIndex)) {
        showScreen(screenIndex);
      }
    }

    if (event.keyCode === LEFT_ARROW_CODE) {
      let screenIndex = currentScreenIndex - 1;

      if (checkScreenIndex(screenIndex)) {
        showScreen(screenIndex);
      }
    }
  }
});

showScreen(3);
