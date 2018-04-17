import showScreen from '../common/show-screen';
import {initAnswersTemplate} from "./answers";
import {initStats} from "../screens/stats";
import {initHeaderTemplate, initHeaderEvents} from "../blocks/header";
import {initGame1Template, initGame1Events} from "./types/game-1";
import {initGame2Template, initGame2Events} from "./types/game-2";
import {initGame3Template, initGame3Events} from "./types/game-3";

export const LIVE_NUMBER = 3;

export const GAME_NUMBER = 10;

export const ANSWER_TIME = {
  FAST: 10,
  SLOW: 20,
  INCORRECT: 30
};

export const ANSWER_SCORE = {
  CORRECT: 100,
  FAST: 50,
  SLOW: -50,
  INCORRECT: 0,
  LIFE: 50
};

export const gameState = {
  number: 1,
  time: 12,
  lives: LIVE_NUMBER
};

export const switchGame = () => {
  if (gameState.number >= GAME_NUMBER || gameState.lives < 0) {
    initStats();
  } else {
    gameState.number++;
    initGame();
  }
};

export const initGame = () => {
  const question = questions[gameState.number - 1];

  showScreen(initHeaderTemplate(gameState) + gameType[question.type].template(question.content) + initAnswersTemplate(), () => {
    initHeaderEvents();
    gameType[question.type].events();
  });
};

const gameType = {
  1: {
    template: initGame1Template,
    events: initGame1Events
  },
  2: {
    template: initGame2Template,
    events: initGame2Events
  },
  3: {
    template: initGame3Template,
    events: initGame3Events
  }
};

const questions = [
  {
    type: 1,
    content: {
      text: `Угадайте для каждого изображения фото или рисунок?`,
      images: [
        {
          url: `https://k42.kn3.net/CF42609C8.jpg`,
          type: `paint`
        },
        {
          url: `http://i.imgur.com/1KegWPz.jpg`,
          type: `photo`
        }
      ]
    }
  },
  {
    type: 2,
    content: {
      text: `Угадай, фото или рисунок?`,
      images: [
        {
          url: `https://k42.kn3.net/D2F0370D6.jpg`,
          type: `paint`
        }
      ]
    }
  },
  {
    type: 3,
    content: {
      text: `Найдите рисунок среди изображений`,
      type: `paint`,
      images: [
        {
          url: `https://k32.kn3.net/5C7060EC5.jpg`,
          type: `paint`
        },
        {
          url: `https://i.imgur.com/DiHM5Zb.jpg`,
          type: `photo`
        },
        {
          url: `http://i.imgur.com/DKR1HtB.jpg`,
          type: `photo`
        }
      ]
    }
  },
  {
    type: 1,
    content: {
      text: `Угадайте для каждого изображения фото или рисунок?`,
      images: [
        {
          url: `https://k42.kn3.net/CF42609C8.jpg`,
          type: `paint`
        },
        {
          url: `http://i.imgur.com/1KegWPz.jpg`,
          type: `photo`
        }
      ]
    }
  },
  {
    type: 2,
    content: {
      text: `Угадай, фото или рисунок?`,
      images: [
        {
          url: `https://k42.kn3.net/D2F0370D6.jpg`,
          type: `paint`
        }
      ]
    }
  },
  {
    type: 3,
    content: {
      text: `Найдите рисунок среди изображений`,
      type: `paint`,
      images: [
        {
          url: `https://k32.kn3.net/5C7060EC5.jpg`,
          type: `paint`
        },
        {
          url: `https://i.imgur.com/DiHM5Zb.jpg`,
          type: `photo`
        },
        {
          url: `http://i.imgur.com/DKR1HtB.jpg`,
          type: `photo`
        }
      ]
    }
  },
  {
    type: 1,
    content: {
      text: `Угадайте для каждого изображения фото или рисунок?`,
      images: [
        {
          url: `https://k42.kn3.net/CF42609C8.jpg`,
          type: `paint`
        },
        {
          url: `http://i.imgur.com/1KegWPz.jpg`,
          type: `photo`
        }
      ]
    }
  },
  {
    type: 2,
    content: {
      text: `Угадай, фото или рисунок?`,
      images: [
        {
          url: `https://k42.kn3.net/D2F0370D6.jpg`,
          type: `paint`
        }
      ]
    }
  },
  {
    type: 3,
    content: {
      text: `Найдите рисунок среди изображений`,
      type: `paint`,
      images: [
        {
          url: `https://k32.kn3.net/5C7060EC5.jpg`,
          type: `paint`
        },
        {
          url: `https://i.imgur.com/DiHM5Zb.jpg`,
          type: `photo`
        },
        {
          url: `http://i.imgur.com/DKR1HtB.jpg`,
          type: `photo`
        }
      ]
    }
  },
  {
    type: 2,
    content: {
      text: `Угадай, фото или рисунок?`,
      images: [
        {
          url: `https://k42.kn3.net/D2F0370D6.jpg`,
          type: `paint`
        }
      ]
    }
  }
];
