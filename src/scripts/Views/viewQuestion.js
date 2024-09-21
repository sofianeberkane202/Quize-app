import icons from "url:../../../src/images/icons.svg";
import timerView from "./timerView";
import { NUMBER_OF_QUESTION } from "../config";
class QuestionView {
  #parentElement = document.querySelector(".quiz");
  #questionsContainer;
  #data;
  static currentActiveQuestionContainer = 0;
  finalScore = 0;

  #errorMassage = "There is a problem Try Again";

  render(data) {
    this.#data = data;
    const markup = this.generateMarkup();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
    this.#questionsContainer = this.#parentElement.querySelectorAll(
      ".question-container"
    );
  }

  generateMarkup() {
    return this.#data
      .map((question, i) => {
        const answers = this.#generateRandomArray([
          question.correctAnswer,
          ...question.incorrectAnswers,
        ]);

        return `
      <div class="question-container ${i === 0 ? "active" : ""}" data-id="${i}">
        <div class="question-box">
          <h1 class="question ${
            this.#checkNumberCharcterInQuestion(question.question)
              ? "small-ft"
              : ""
          }" id="question" >
            ${question.question}
          </h1>
        </div>

        <ul class="answers">
          ${this.#generateAnswres(answers)}
        </ul>
      </div>         
      `;
      })
      .join("");
  }

  #generateAnswres(answers) {
    return answers
      .map((answer, i) => {
        return `
          <li class="answer" data-id="answer${i + 1}">
            <svg class="icon-unchecked">
              <use href="${icons}#icon-radio-unchecked"></use>
            </svg>
            <span answer
              >${answer}</
            span>
          </li>
      `;
      })
      .join("");
  }

  #generateRandomArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  #checkNumberCharcterInQuestion(question) {
    if (question.length > 70) return true;
    return false;
  }

  renderError(errorMessage = this.#errorMassage) {
    const markup = this.#generateErrorMarkup(errorMessage);
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  #generateErrorMarkup() {
    return `
    <div class="error-Message">
        <p>
          There is a problem Try Again
        </p>
          <i class="fa-solid fa-triangle-exclamation"></i>
      </div>
    `;
  }

  #moveToNext() {
    this.#questionsContainer[
      QuestionView.currentActiveQuestionContainer
    ].classList.remove("active");

    QuestionView.currentActiveQuestionContainer++;

    this.#questionsContainer[
      QuestionView.currentActiveQuestionContainer
    ].classList.add("active");
  }

  #moveToPrevious() {
    this.#questionsContainer[
      QuestionView.currentActiveQuestionContainer
    ].classList.remove("active");

    QuestionView.currentActiveQuestionContainer--;

    this.#questionsContainer[
      QuestionView.currentActiveQuestionContainer
    ].classList.add("active");
  }

  #endoFQuiz(handler) {
    this.#hidden();
    handler();
    this.#renderFinalScore();
  }

  moveToNextQuestion() {
    if (
      QuestionView.currentActiveQuestionContainer ===
      this.#questionsContainer.length - 1
    ) {
      // console.log("timer", timerView.timer);
      clearInterval(timerView.timer);
      // console.log("timer was cleared", timerView.timer);

      this.#parentElement
        .querySelector(".btn-quiz")
        .querySelectorAll(".btn")
        .forEach((btn) => btn.classList.toggle("active"));

      return;
    }

    this.#moveToNext();

    timerView.countDown();

    // update question number
    const questionNumber = this.#parentElement
      .querySelector(".questions")
      .querySelector(".current-question");

    const currentNumber = +questionNumber.textContent;
    questionNumber.textContent = currentNumber + 1;

    // console.log(QuestionView.currentActiveQuestionContainer);
  }

  addHandlerChooseQuestion(handler) {
    this.#parentElement.addEventListener("click", (e) => {
      // select the answer element
      const answer = e.target.closest(".answer");
      if (!answer) return;

      const answerOfAQuestion = answer.querySelector("[answer]").textContent;
      const questionId = +answer.closest(".question-container").dataset.id;

      answer.querySelector("svg").classList.toggle("icon-unchecked");
      answer.querySelector("svg").classList.toggle("icon-checked");

      const use = answer.querySelector("svg").querySelector("use");

      if (answer.querySelector("svg").classList.contains("icon-unchecked")) {
        use.setAttribute("href", `${icons}#icon-radio-unchecked`);
        handler(
          { answer: answerOfAQuestion, id: answer.dataset.id },
          false,
          questionId
        );
      }

      if (answer.querySelector("svg").classList.contains("icon-checked")) {
        use.setAttribute("href", `${icons}#icon-radio-checked`);
        handler(
          { answer: answerOfAQuestion, id: answer.dataset.id },
          true,
          questionId
        );
      }
    });
  }

  addHandlerLoadQuestions(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerValidQuestion() {
    this.#parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".explore");
      if (!btn) return;
      // console.log("btn is :", btn);

      clearInterval(timerView.timer);
      this.moveToNextQuestion();
    });
  }

  #hidden() {
    const btnQuiz = this.#parentElement.querySelector(".btn-quiz");
    const timer = this.#parentElement.querySelector(".timer");
    const questionGaid = this.#parentElement.querySelector(".questions");
    const btnShowResults =
      this.#parentElement.querySelector(".show-results-btn");

    [btnQuiz, timer, questionGaid].forEach((btn) =>
      btn.classList.add("hidden")
    );
    btnShowResults.classList.remove("hidden");

    this.#questionsContainer[
      QuestionView.currentActiveQuestionContainer
    ].classList.remove("active");
  }

  #display() {
    QuestionView.currentActiveQuestionContainer = 0;
    const questionGaid = this.#parentElement.querySelector(".questions");
    const moveBtn = this.#parentElement.querySelector(".move-btn");
    const btnShowResults =
      this.#parentElement.querySelector(".show-results-btn");
    const finalResult = this.#parentElement.querySelector(".final-result");

    [questionGaid, moveBtn].forEach((btn) => btn.classList.remove("hidden"));

    [btnShowResults, finalResult].forEach((ele) => ele.classList.add("hidden"));

    moveBtn.querySelector(".left").classList.add("hidden");

    this.#questionsContainer[
      QuestionView.currentActiveQuestionContainer
    ].classList.add("active");

    questionGaid.querySelector(".current-question").textContent =
      QuestionView.currentActiveQuestionContainer + 1;

    this.#parentElement
      .querySelectorAll(".answer")
      .forEach((item) => (item.style.pointerEvents = "none"));
  }

  #renderFinalScore() {
    this.finalScore = (this.finalScore * 100) / NUMBER_OF_QUESTION;
    const finalResult = this.#parentElement.querySelector(".final-result");
    finalResult.querySelector(".final-score .percentage").textContent =
      this.finalScore;

    console.log(this.finalScore);

    this.#parentElement.querySelector(
      ".final-score"
    ).style.background = `conic-gradient(var(--primary-color) 0% ${this.finalScore}%, #f5f5f5 ${this.finalScore}% 100%)`;
    finalResult.classList.remove("hidden");
  }

  renderEvaluation(answers, questionId, question) {
    // select quetion container by using questionId
    const questionContent = this.#parentElement.querySelector(
      `[data-id="${questionId}"]`
    );

    questionContent.querySelectorAll(".answer").forEach((answer) => {
      const answerText = answer.querySelector("[answer]").textContent;

      // console.log(answerText, question.correctAnswer);
      if (answerText.trim() === question.correctAnswer) {
        answer.classList.add("true");
        answer.querySelector("svg").classList.remove("icon-unchecked");
        answer.querySelector("svg").classList.add("icon-checked");
        answer
          .querySelector("svg")
          .querySelector("use")
          .setAttribute("href", `${icons}#icon-radio-checked`);
      }
    });

    answers.forEach((answer, answerId) => {
      if (answer !== question.correctAnswer)
        questionContent
          .querySelector(`[data-id="${answerId}"]`)
          .classList.add("false");

      if (answer === question.correctAnswer) {
        this.finalScore += 1;
      }
    });
  }

  addHandlerEndQuiz(handler) {
    this.#parentElement
      .querySelector(".end-of-quiz")
      .addEventListener("click", () => {
        this.#endoFQuiz(handler);
      });
  }

  addHandlerShowResults() {
    this.#parentElement
      .querySelector(".show-results-btn")
      .addEventListener("click", () => {
        this.#display();
      });
  }

  addHandlerMoveBetweenQuestions() {
    this.#parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn");
      if (!btn) return;

      const currentQuestion = this.#parentElement
        .querySelector(".questions")
        .querySelector(".current-question");

      if (btn.classList.contains("left")) {
        this.#moveToPrevious();

        currentQuestion.textContent =
          QuestionView.currentActiveQuestionContainer + 1;

        if (QuestionView.currentActiveQuestionContainer === 0) {
          btn.classList.add("hidden");
          return;
        }
      }

      if (btn.classList.contains("right")) {
        this.#moveToNext();

        currentQuestion.textContent =
          QuestionView.currentActiveQuestionContainer + 1;

        if (
          QuestionView.currentActiveQuestionContainer ===
          this.#questionsContainer.length - 1
        ) {
          btn.classList.add("hidden");
          return;
        }
      }

      if (
        QuestionView.currentActiveQuestionContainer > 0 &&
        QuestionView.currentActiveQuestionContainer <
          this.#questionsContainer.length - 1
      ) {
        this.#parentElement
          .querySelector(".move-btn")
          .querySelectorAll(".btn")
          .forEach((btn) => btn.classList.remove("hidden"));
      }
    });
  }
}

export default new QuestionView();
