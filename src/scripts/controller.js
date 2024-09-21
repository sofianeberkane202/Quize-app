import "./model";
import * as model from "./model";
import viewQuestion from "./Views/viewQuestion";
import timerView from "./Views/timerView";

const controllerQuestions = async function () {
  try {
    await model.getQuizQuestions();
    viewQuestion.render(model.state.questions);
    timerView.countDown();
  } catch (error) {
    viewQuestion.renderError(error);
  }
};

const controlerAnswer = function (answerChoosed, isChecked, QuestionID) {
  isChecked
    ? model.setAnswerChoosed(answerChoosed, QuestionID)
    : model.removeAnswerChoosed(answerChoosed, QuestionID);

  // console.log(model.state.answers);
};

const controllerEvaluation = function () {
  model.state.answers.forEach((answer, questionId) => {
    viewQuestion.renderEvaluation(
      answer,
      questionId,
      model.state.questions[questionId]
    );
  });
};

const init = function () {
  // load event :
  viewQuestion.addHandlerLoadQuestions(controllerQuestions);
  // --------------------
  viewQuestion.addHandlerChooseQuestion(controlerAnswer);
  viewQuestion.addHandlerValidQuestion();
  viewQuestion.addHandlerEndQuiz(controllerEvaluation);
  viewQuestion.addHandlerShowResults();
  viewQuestion.addHandlerMoveBetweenQuestions();
};

init();
