import GreetingView from './greeting-view';
import {showScreen} from '../view-utils';
import {initRules} from "../rules/rules";

export const initGreeting = () => {
  const greetingView = new GreetingView();

  greetingView.onContinueClick = () => {
    initRules();
  };

  showScreen([greetingView.element]);
};

