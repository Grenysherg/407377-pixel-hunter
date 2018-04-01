const mainElement = document.querySelector(`.js-main`);

export default (content) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(content.cloneNode(true));
};
