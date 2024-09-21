import { QUESTION_DURATION } from "../config";
import viewQuestion from "./viewQuestion";
class TimerView {
  #parentElement = document.querySelector(".timer");
  duration;
  timer;

  #conversion(seconds) {
    const SECONDS_OF_A_MINUTE = 60;
    const minutes = Math.floor(seconds / SECONDS_OF_A_MINUTE);
    seconds %= SECONDS_OF_A_MINUTE;

    return { minutes, seconds };
  }

  #updateTimerUI(seconds, minutes) {
    this.#parentElement.querySelector("#minutes").textContent =
      `${minutes}`.padStart(2, 0);
    this.#parentElement.querySelector("#seconds").textContent =
      `${seconds}`.padStart(2, 0);
  }

  #timeDown() {
    this.duration--;
    const { minutes, seconds } = this.#conversion(this.duration);
    this.#updateTimerUI(seconds, minutes);

    if (this.duration === 0) {
      clearInterval(this.timer);
      viewQuestion.moveToNextQuestion();
    }
  }

  countDown() {
    this.duration = QUESTION_DURATION;
    this.timer = setInterval(this.#timeDown.bind(this), 1000);
  }
}

export default new TimerView();
