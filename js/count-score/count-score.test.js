import {assert} from 'chai';
import countScore from './count-score';
import {ANSWER_TIME, ANSWER_SCORE, LIVE_NUMBER, GAME_NUMBER} from "../data";

const TEST_TIME_NUMBER = {
  FAST: ANSWER_TIME.FAST - 1,
  MIDDLE: ANSWER_TIME.SLOW - 1,
  SLOW: ANSWER_TIME.INCORRECT - 1
};

const TEST_TIME_COUNT = {
  FAST: TEST_TIME_NUMBER.FAST,
  MIDDLE: TEST_TIME_NUMBER.MIDDLE - ANSWER_TIME.FAST,
  SLOW: TEST_TIME_NUMBER.SLOW - ANSWER_TIME.SLOW
};

const CORRECT_ANSWER_SCORE = {
  FAST: ANSWER_SCORE.CORRECT + ANSWER_SCORE.FAST,
  MIDDLE: ANSWER_SCORE.CORRECT,
  SLOW: ANSWER_SCORE.CORRECT + ANSWER_SCORE.SLOW
};

const getAnswersExample = (remainingLives, answerTime) => {
  const incorrectAnswersNumber = LIVE_NUMBER - remainingLives;
  const incorrectAnswers = Array(incorrectAnswersNumber).fill({isCorrect: false});

  const correctAnswers = Array(GAME_NUMBER - incorrectAnswersNumber).fill({
    isCorrect: true,
    time: answerTime
  });

  return correctAnswers.concat(incorrectAnswers);
};

const getScoreExample = (correctAnswerScore, remainingLives) => {
  const incorrectAnswerNumber = LIVE_NUMBER - remainingLives;
  const correctAnswerNumber = GAME_NUMBER - incorrectAnswerNumber;

  return incorrectAnswerNumber * ANSWER_SCORE.INCORRECT + correctAnswerNumber * correctAnswerScore + remainingLives * ANSWER_SCORE.LIFE;
};

describe(`Count score:`, () => {
  it(`should return -1 when the gamer hasn't answered all questions`, () => {
    for (let i = 1; i < GAME_NUMBER; i++) {
      assert.equal(countScore(Array(i).fill(i), 0), -1);
    }
  });

  it(`should return the correct score when the gamer has answered fast and has all lives`, () => {
    const score = getScoreExample(CORRECT_ANSWER_SCORE.FAST, LIVE_NUMBER);

    for (let i = 1; i <= TEST_TIME_COUNT.FAST; i++) {
      assert.equal(countScore(getAnswersExample(LIVE_NUMBER, ANSWER_TIME.FAST - i), LIVE_NUMBER), score);
    }
  });

  it(`should return the correct score when the gamer has answered usually and has all lives`, () => {
    const score = getScoreExample(CORRECT_ANSWER_SCORE.MIDDLE, LIVE_NUMBER);

    for (let i = 1; i <= TEST_TIME_COUNT.MIDDLE; i++) {
      assert.equal(countScore(getAnswersExample(LIVE_NUMBER, ANSWER_TIME.SLOW - i), LIVE_NUMBER), score);
    }
  });

  it(`should return the correct score when the gamer has answered slow and has all lives`, () => {
    const score = getScoreExample(CORRECT_ANSWER_SCORE.SLOW, LIVE_NUMBER);

    for (let i = 1; i <= TEST_TIME_COUNT.SLOW; i++) {
      assert.equal(countScore(getAnswersExample(LIVE_NUMBER, ANSWER_TIME.INCORRECT - i), LIVE_NUMBER), score);
    }
  });

  it(`should return the correct score when the gamer has answered fast and hasn't lives`, () => {
    const score = getScoreExample(CORRECT_ANSWER_SCORE.FAST, 0);

    for (let i = 1; i <= TEST_TIME_COUNT.FAST; i++) {
      assert.equal(countScore(getAnswersExample(0, ANSWER_TIME.FAST - i), 0), score);
    }
  });

  it(`should return the correct score when the gamer has answered usually and hasn't lives`, () => {
    const score = getScoreExample(CORRECT_ANSWER_SCORE.MIDDLE, 0);

    for (let i = 1; i <= TEST_TIME_COUNT.MIDDLE; i++) {
      assert.equal(countScore(getAnswersExample(0, ANSWER_TIME.SLOW - i), 0), score);
    }
  });

  it(`should return the correct score when the gamer has answered slow and hasn't lives`, () => {
    const score = getScoreExample(CORRECT_ANSWER_SCORE.SLOW, 0);

    for (let i = 1; i <= TEST_TIME_COUNT.SLOW; i++) {
      assert.equal(countScore(getAnswersExample(0, ANSWER_TIME.INCORRECT - i), 0), score);
    }
  });

  it(`should return the correct score in the normal case`, () => {
    for (let i = 1; i < LIVE_NUMBER; i++) {
      assert.equal(countScore(getAnswersExample(i, TEST_TIME_NUMBER.FAST), i), getScoreExample(CORRECT_ANSWER_SCORE.FAST, i));
      assert.equal(countScore(getAnswersExample(i, TEST_TIME_NUMBER.MIDDLE), i), getScoreExample(CORRECT_ANSWER_SCORE.MIDDLE, i));
      assert.equal(countScore(getAnswersExample(i, TEST_TIME_NUMBER.SLOW), i), getScoreExample(CORRECT_ANSWER_SCORE.SLOW, i));
    }
  });
});
