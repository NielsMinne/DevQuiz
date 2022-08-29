/**
 * The Main Application (Quiz)
 */

import {APP_TITLE,QUESTIONS} from '../js/consts.js';
import {displayAndCheckAnswers,SCORE,TIME_TO_ANSWER} from './answerFunction.js';
import {button,questionCounter,header,container,timer} from '../Components/index.js';

/* variables */
let QUESTION_INDEX = 0;
let QUESTION_MAX = 0;
let USER_ANSWERS = {};
let quizTimeSpent = 0;


const appContainer = document.querySelector('#app');

const app = () => {
  
  document.title = APP_TITLE;
  // TODO: create your application
  QUESTION_MAX = QUESTIONS.length; //set max question to the length of localStorage Questions
  appContainer.appendChild(makeQuestionElement(QUESTIONS[0])); //Show first question to start the quiz

  //Timer to keep track how long you played quiz (highscore)
  const quizTime = setInterval(()=>{
    quizTimeSpent++;
  },1000)
};


const makeQuestionElement = (question) => {
  
  const quizContainer = container([],'answers');
  //Create the top element with counter, timer and score
  quizContainer.appendChild(
    container([
    questionCounter(QUESTION_INDEX,QUESTION_MAX),
    timer(TIME_TO_ANSWER,'timer'),
    header(SCORE,2,'question-header')
  ],'quizHeader'));

  //create bar that decreases over time and corresponds with timer 
  const countdownBar = document.createElement('div');
  quizContainer.appendChild(countdownBar);
  countdownBar.className = 'round-time-bar';
  countdownBar.setAttribute('data-style','smooth');
  quizContainer.appendChild(countdownBar);
  
  //create the question and answers with function that checks if correct
  quizContainer.appendChild(header(question.question,2,'question-header'));
  displayAndCheckAnswers(question,quizContainer);
  
  //Stop Quiz
  const stopButton = button('STOP QUIZ','submit-btn', (e) => {
    setTimeout(() => {
      window.location.href = '../html/index.html';
    }, 500);
  })
  quizContainer.appendChild(stopButton);
  return quizContainer;
}

export const nextQuestion = (answer) => {
  USER_ANSWERS[QUESTIONS[QUESTION_INDEX].id] = answer || "none" ; //create object with id and answer and push it in array
  QUESTION_INDEX++; //increment index to get next question in object array
  appContainer.innerHTML = ""; //clear the container
  
  if(QUESTION_INDEX < QUESTION_MAX){
    appContainer.appendChild(makeQuestionElement(QUESTIONS[QUESTION_INDEX]));
  
  } else { //End of questions
    localStorage.setItem('quizTime',quizTimeSpent); //sets amount of time spent on quiz in localStorage
    localStorage.setItem('userAnswers',JSON.stringify(USER_ANSWERS)); //sets the USER_ANSWERS array in the localStorage
    localStorage.setItem('recentScore', SCORE); // sets score at end in localStorage
    window.location.href = "../html/end.html"
  }
}

app();