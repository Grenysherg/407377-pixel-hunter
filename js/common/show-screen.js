const mainElement = document.querySelector(`.js-main`);

const getContentElement = (template) => {
  return document.createRange().createContextualFragment(template);
};

export default (template, initEvents) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(getContentElement(template).cloneNode(true));

  initEvents();
};
