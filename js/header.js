import {initGreeting} from './greeting';

const initHeader = () => {
  const headerElement = document.querySelector(`.js-header`);
  const backElement = headerElement.querySelector(`.js-header-back`);

  backElement.addEventListener(`click`, () => {
    initGreeting();
  });
};

export {initHeader};
