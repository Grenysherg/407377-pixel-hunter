import IntroView from './intro-view';
import {showScreen} from '../view-utils';
import {initGreeting} from "../greeting/greeting";

export const initIntro = () => {
  const introView = new IntroView();

  introView.onAsteriskClick = () => {
    initGreeting();
  };

  showScreen([introView.element]);
};
