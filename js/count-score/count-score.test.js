import {assert} from 'chai';
import countScore from './count-score';
import {AnswerTime, Score, GameParameter} from "../data";

const TestTimeNumber = {
  FAST: AnswerTime.FAST - 1,
  MIDDLE: AnswerTime.SLOW - 1,
  SLOW: AnswerTime.MAX - 1
};

const TestTimeCount = {
  FAST: TestTimeNumber.FAST,
  MIDDLE: TestTimeNumber.MIDDLE - AnswerTime.FAST,
  SLOW: TestTimeNumber.SLOW - AnswerTime.SLOW
};

const CorrectAnswerScore = {
  FAST: Score.CORRECT_ANSWER + Score.FAST_ANSWER,
  MIDDLE: Score.CORRECT_ANSWER,
  SLOW: Score.CORRECT_ANSWER + Score.SLOW_ANSWER
};

const getAnswersExample = (remainingLives, answerTime) => {
  const incorrectAnswersNumber = GameParameter.LIVES - remainingLives;
  const incorrectAnswers = Array(incorrectAnswersNumber).fill({isCorrect: false});

  const correctAnswers = Array(GameParameter.GAMES - incorrectAnswersNumber).fill({
    isCorrect: true,
    time: answerTime
  });

  return correctAnswers.concat(incorrectAnswers);
};

const getScoreExample = (correctAnswerScore, remainingLives) => {
  const incorrectAnswerNumber = GameParameter.LIVES - remainingLives;
  const correctAnswerNumber = GameParameter.GAMES - incorrectAnswerNumber;

  return incorrectAnswerNumber * Score.INCORRECT_ANSWER + correctAnswerNumber * correctAnswerScore + remainingLives * Score.LIFE;
};

describe(`Count score:`, () => {
  it(`should return -1 when the gamer hasn't answered all questions`, () => {
    for (let i = 1; i < GameParameter.GAMES; i++) {
      assert.equal(countScore(Array(i).fill(i), 0), -1);
    }
  });

  it(`should return the correct score when the gamer has answered fast and has all lives`, () => {
    const score = getScoreExample(CorrectAnswerScore.FAST, GameParameter.LIVES);

    for (let i = 1; i <= TestTimeCount.FAST; i++) {
      assert.equal(countScore(getAnswersExample(GameParameter.LIVES, AnswerTime.FAST - i), GameParameter.LIVES), score);
    }
  });

  it(`should return the correct score when the gamer has answered usually and has all lives`, () => {
    const score = getScoreExample(CorrectAnswerScore.MIDDLE, GameParameter.LIVES);

    for (let i = 1; i <= TestTimeCount.MIDDLE; i++) {
      assert.equal(countScore(getAnswersExample(GameParameter.LIVES, AnswerTime.SLOW - i), GameParameter.LIVES), score);
    }
  });

  it(`should return the correct score when the gamer has answered slow and has all lives`, () => {
    const score = getScoreExample(CorrectAnswerScore.SLOW, GameParameter.LIVES);

    for (let i = 1; i <= TestTimeCount.SLOW; i++) {
      assert.equal(countScore(getAnswersExample(GameParameter.LIVES, AnswerTime.MAX - i), GameParameter.LIVES), score);
    }
  });

  it(`should return the correct score when the gamer has answered fast and hasn't lives`, () => {
    const score = getScoreExample(CorrectAnswerScore.FAST, 0);

    for (let i = 1; i <= TestTimeCount.FAST; i++) {
      assert.equal(countScore(getAnswersExample(0, AnswerTime.FAST - i), 0), score);
    }
  });

  it(`should return the correct score when the gamer has answered usually and hasn't lives`, () => {
    const score = getScoreExample(CorrectAnswerScore.MIDDLE, 0);

    for (let i = 1; i <= TestTimeCount.MIDDLE; i++) {
      assert.equal(countScore(getAnswersExample(0, AnswerTime.SLOW - i), 0), score);
    }
  });

  it(`should return the correct score when the gamer has answered slow and hasn't lives`, () => {
    const score = getScoreExample(CorrectAnswerScore.SLOW, 0);

    for (let i = 1; i <= TestTimeCount.SLOW; i++) {
      assert.equal(countScore(getAnswersExample(0, AnswerTime.MAX - i), 0), score);
    }
  });

  it(`should return the correct score in the normal case`, () => {
    for (let i = 1; i < GameParameter.LIVES; i++) {
      assert.equal(countScore(getAnswersExample(i, TestTimeNumber.FAST), i), getScoreExample(CorrectAnswerScore.FAST, i));
      assert.equal(countScore(getAnswersExample(i, TestTimeNumber.MIDDLE), i), getScoreExample(CorrectAnswerScore.MIDDLE, i));
      assert.equal(countScore(getAnswersExample(i, TestTimeNumber.SLOW), i), getScoreExample(CorrectAnswerScore.SLOW, i));
    }
  });
});
