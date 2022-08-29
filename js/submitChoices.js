/**
 * Page to submit your quiz choices (amount of questions,category,difficulty)
 */

import {loader} from '../Components/loader.js';
import {fetchQuestions} from '../js/fetchQuestions.js';

import { APP_TITLE } from './consts.js';
document.title = APP_TITLE;

//Get all the elements
const questionForm = document.getElementById('choiceSubmit');
let sliderInfo = document.querySelector('.slider-input');
const slider = document.querySelector('#amount');
const myApp = document.querySelector('#app');

//Set hasSaved to false in localStorage so we can save again at the end (See end.js)
localStorage.setItem('hasSaved',false);

//Change number under slider
slider.addEventListener('input', () =>{
  sliderInfo.innerText =  slider.value;
})

const initApp = () => {
  myApp.appendChild(loader());
}

//Check if API has the amount of questions inside a certain category and difficulty + alerts
/**
 * @returns an alert if the API has the requested choice
 */
const checkAvailableQuestions = (limit,category,difficulty,questions,) => {
  if(limit > questions.length){
    alert(`De categorie '${category}' heeft maar ${questions.length} vragen met difficulty '${difficulty}'`);
  }
}

const startQuiz = () => {
  
  questionForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //get Values
    let limit = document.getElementById('amount').value;
    let difficulty = document.querySelector('input[name="difficulty"]:checked').value;
    let category = document.getElementById('category').selectedOptions[0].value;

    localStorage.setItem('difficulty', difficulty); //set the difficulty in local

    setTimeout(() => {
      fetchQuestions(limit, difficulty, category)
        .then((questionsArr) => {

          //Clean the fetch by removing questions and answers that are null
          const cleanedQuestions = questionsArr.map((question) => {
            Object.keys(question.answers).forEach(answerKey => {
              if (!question.answers[answerKey]) {
                delete question.correct_answers[`${answerKey}_correct`];
                delete question.answers[answerKey];
              }
            });
            return question;
          });

          checkAvailableQuestions(limit, category, difficulty, cleanedQuestions);

          //store the cleanedQuestions in localstorage to access in next stage
          localStorage.setItem('questions', JSON.stringify(cleanedQuestions));
          return window.location.href = '../html/quiz.html';
        })
        .catch((error) => {
          alert(error);
          location.href = '../html/quizChoice.html';
        })
    }, 1000)
    myApp.innerText = ""; //clear content to only show loader
    initApp(); //shows spinning loader 
  })
}

startQuiz();