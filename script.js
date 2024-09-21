const quizContainer = document.querySelector(".quiz");
const questions = document.querySelectorAll(".question-container");
const answers = document.querySelector(".answers");
const minutesEle = document.getElementById("minutes");
const secondsEle = document.getElementById("seconds");
const moveBtnContainer = document.querySelector(".move-btn");

// btn

// global variables
const numberOfQuestions = questions.length;
const numberOfAnswers = answers.children.length;
const radio = Array(numberOfAnswers).fill(false);
let currentQuestion = 0;

const checkedOrUnchecked = function (ch) {
  const choice = ch ? 1 : 0;
  switch (choice) {
    case 0:
      return "unchecked";
    case 1:
      return "checked";
  }
};

answers.addEventListener("click", function (e) {
  const answer = e.target.closest(".answer");
  if (!answer) return;
  const answerID = +answer.dataset.id - 1;
  const image = answer.querySelector("img");

  radio[answerID] = !radio[answerID];

  image.setAttribute(
    "src",
    `./images/radio-${checkedOrUnchecked(radio[answerID])}.svg`
  );
});

// 2 - Question Timer

let QUESTION_DURATION = 10;

const conversion = function (seconds) {
  const SECONDS_OF_A_MINUTE = 60;
  const minutes = Math.floor(seconds / SECONDS_OF_A_MINUTE);
  seconds %= SECONDS_OF_A_MINUTE;

  return { minutes, seconds };
};

const updateTimerUI = function (seconds, minutes) {
  minutesEle.textContent = `${minutes}`.padStart(2, 0);
  secondsEle.textContent = `${seconds}`.padStart(2, 0);
};

const moveToNextQuestion = function () {
  if (currentQuestion === numberOfQuestions - 1) return;
  console.log(questions[currentQuestion], questions);
  questions[currentQuestion].classList.remove("active");
  currentQuestion++;
  questions[currentQuestion].classList.add("active");
  countDown();
};

const countDown = function () {
  let duration = QUESTION_DURATION;
  const timer = setInterval(function () {
    duration--;
    const { minutes, seconds } = conversion(duration);
    updateTimerUI(seconds, minutes);

    if (duration === 0) {
      clearInterval(timer);
      moveToNextQuestion();
    }
  }, 1000);
};

// countDown();

// move to next page

moveBtnContainer.addEventListener("click", function (e) {
  const btn = e.target.closest(".btn");
  if (!btn) return;

  if (btn.classList.contains("left")) {
    currentQuestion--;
    moveToNextQuestion();
  }
});
