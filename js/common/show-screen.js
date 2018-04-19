let mainElement = null;

const getMainElement = () => {
  if (!mainElement) {
    mainElement = document.querySelector(`.js-main`);
  }

  return mainElement;
};

const getContentElement = (template) => {
  return document.createRange().createContextualFragment(template).cloneNode(true);
};

export default (template, initEvents) => {
  mainElement = getMainElement();

  mainElement.innerHTML = ``;
  mainElement.appendChild(getContentElement(template));

  initEvents();
};
