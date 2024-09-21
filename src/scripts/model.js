import { NUMBER_OF_QUESTION } from "./config";
export const state = {
  questions: [],
  answers: new Map(),
};

// get quize question

const parsAnswer = function (...answers) {
  const parser = new DOMParser();
  const answersAfterparsing = answers.map((answer) => {
    const doc = parser.parseFromString(answer, "text/html");
    return doc.documentElement.textContent.trim();
  });

  return answersAfterparsing.length === 1
    ? answersAfterparsing[0]
    : answersAfterparsing;
};

export const getQuizQuestions = async function () {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${NUMBER_OF_QUESTION}`
    );

    console.log(response);
    if (!response.ok) throw new Error("There is a problem Try Again");
    const data = await response.json();

    state.questions = data.results.map((result) => {
      const correct_answer = Array.isArray(result.correct_answer)
        ? parsAnswer(...result.correct_answer)
        : parsAnswer(result.correct_answer);

      const incorrect_answers = parsAnswer(...result.incorrect_answers);
      return {
        category: result.category,
        correctAnswer: correct_answer,
        difficulty: result.difficulty,
        incorrectAnswers: Array.isArray(incorrect_answers)
          ? incorrect_answers
          : [incorrect_answers],
        question: result.question,
        type: result.type,
      };
    });
    console.log(state.questions);
  } catch (error) {
    throw error;
  }
};

// getQuizQuestions();

export const setAnswerChoosed = function (answerChoosed, questionId) {
  if (!state.answers.has(questionId)) {
    state.answers.set(questionId, state.answers.get(questionId) || new Map());
  }

  state.answers
    .get(questionId)
    .set(answerChoosed.id, answerChoosed.answer.trim());
};

export const removeAnswerChoosed = function (answerChoosed, questionId) {
  state.answers.get(questionId).delete(answerChoosed.id);
};

export const evaluation = function () {
  state.questions.forEach((question, i) => {});
};
