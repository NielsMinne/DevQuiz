/**
 * Timer Component
 */


import { nextQuestion } from "../js/app.js"; //Needed in timer component

export let timerCountdown; //Export for clearInterval in showAnswers.js

/**
 * @param {*} timeToAnswer Amount of time to answer a question
 * @param {*} className Give 1 or more classnames
 * @returns A timer element with built-in countdown
 */

 export const timer = (timeToAnswer,className) => {
    const timerElement = document.createElement('p');
    timerElement.className = className;
    timerElement.innerText = `0:${timeToAnswer}`;
    timerCountdown = setInterval(() => {
    timeToAnswer--;
    timerElement.innerText = `0:${timeToAnswer}`;
        if(timeToAnswer < 10){
            timerElement.innerText = `0:0${timeToAnswer}`;
        }
        if(timeToAnswer <= 5){
            timerElement.style.color = 'var(--color-wrong)';
        }
        if(timeToAnswer == 0 ){ //if time reaches 0 , clear the interval and show the next question
            clearInterval(timerCountdown);
            nextQuestion();
        }
     }, 1000);
    return timerElement;
}