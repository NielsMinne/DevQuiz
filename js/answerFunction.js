/**
 *  function to display the answers and check if the clicked answer is correct or wrong
 */

import { nextQuestion } from "./app.js";
import { timerCountdown } from "../Components/timer.js";
import { answerElement } from "../Components/answerElement.js";

export let SCORE = 0; //Score is needed later
export let TIME_TO_ANSWER = 20;
let SCORE_TO_ADD;

let canAnswer = true; //Needed to check if we clicked an answer (cannot click multiple answers to cheat)

//check what difficulty and assign corresponding score to add when a correct answer is given
const difficultyScore = (difficulty) => {
    if(difficulty === "Easy"){
        SCORE_TO_ADD = 10;
    }
    else if(difficulty === "Medium"){
        SCORE_TO_ADD = 20;
    }
    else{
        SCORE_TO_ADD = 30;
    }
  }

export const displayAndCheckAnswers = (questions,appendElement) =>{
    difficultyScore(localStorage.getItem('difficulty'));
    for (const answer in questions.answers) {
        if (!questions.answers[answer]) break;
        
        //create answerElement for each answer with component
        const answerEl = answerElement(questions.answers[answer],'anchor-style answer');

        answerEl.addEventListener('click', (event) =>{ 
            event.preventDefault(); //prevent default behaviour
            clearInterval(timerCountdown); //Reset the counter

            if(canAnswer){
                if(questions.correct_answers[`${answer}_correct`] === "true"){ //if our answer is correct we give points and show it's correct
                    SCORE += SCORE_TO_ADD;
                    answerEl.classList.add('correct');
                } 
                else{
                    answerEl.classList.add('wrong')
                }
                setTimeout(() => {
                    nextQuestion(answer); //Show the next Question after a short delay
                    canAnswer = true; //so we can click again in next question
                }, 1000);
            }
            canAnswer=false; //once clicked if(canAnswer) logic is executed and we put canAnswer back to false so we can't click multiple times
        })
        
        appendElement.appendChild(answerEl);
    };
    
} 

