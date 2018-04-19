export default (radioContainerElement) => {
  return !(radioContainerElement.querySelector(`.js-game-radio:checked`) === null);
};
