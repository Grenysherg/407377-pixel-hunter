const mainElement = document.querySelector(`.js-main`);

export const createElement = (template) => {
  return document.createRange().createContextualFragment(template.trim());
};

export const showScreen = (elements) => {
  const fragment = document.createDocumentFragment();

  for (const it of elements) {
    fragment.appendChild(it);
  }

  mainElement.innerHTML = ``;
  mainElement.appendChild(fragment);
};

export const getCheckedRadio = (index) => {
  return document.querySelector(`.js-game-option-${index} .js-radio:checked`);
};

export const getImageType = (index) => {
  return document.querySelector(`.js-game-option-${index} .js-image`).dataset.type;
};

export const getCheckedRadioType = (index) => {
  return document.querySelector(`.js-game-option-${index} .js-radio:checked`).value;
};

export const checkClickedElement = (clickedElement, rightElementClass) => {
  return Boolean(clickedElement.closest(rightElementClass));
};
