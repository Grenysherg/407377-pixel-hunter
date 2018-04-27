import HeaderView from './header-view';
import {initGreeting} from "../../greeting/greeting";

export const getHeaderElement = (state) => {
  const headerView = new HeaderView(state);

  headerView.onBackClick = () => {
    initGreeting();
  };

  return headerView.element;
};
