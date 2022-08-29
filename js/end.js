/**
 * End Page
 */

import { container,header,input,button,paragraph,icon } from "../Components/endIndex.js";

import { APP_TITLE } from './consts.js';
document.title = APP_TITLE;

const TOP_AMOUNT_SCORES = 5;

const appContainer = document.querySelector('#app');

//create container for answer overview
const answersContainer = container([], 'answer-container');
answersContainer.setAttribute('id', 'answer-container');

//get items from local storage
const recentScore = localStorage.getItem('recentScore');
const recentTime = localStorage.getItem('quizTime');
const questionsAsked = JSON.parse(localStorage.getItem('questions'));
const givenAnswers = JSON.parse(localStorage.getItem('userAnswers'));

//Function executed when button 'Save' is clicked
const saveHighscore = (e) => {
    e.preventDefault();

    //create score object including name,score and time elapsed
    const score = {
        name: username.value,
        score: recentScore,
        time: recentTime
    };

    // get the score, or the initial value if empty
    const savedScores = localStorage.getItem('highscore') || '[]';

    const highscores = [...JSON.parse(savedScores), score] // add the result to array using spread
        .sort((a, b) => a.time - b.time).sort((a, b) => b.score - a.score) // sort at score first then at time
        .slice(0, TOP_AMOUNT_SCORES) // take highest 5

    //Set items back into the localStorage to acces it in highscore page
    localStorage.setItem('highscore', JSON.stringify(highscores));
    localStorage.setItem('hasSaved', true); //When save button is pressed we set hasSaved to true so the player can't put himself in highscores twice
    location.href = '../html/highscore.html';

}

//redirecting functions
const playAgain = () => {
    location.href = "../html/quizChoice.html";
}

const goHome = () => {
    location.href = "../html/index.html";
}

const goToHighscore = () => {
    location.href = "../html/highscore.html";
}

const goToAnswer = () => {
    location.href = "../html/end.html#answer-container"
}


const makeAnswerOverview = (question) => {

    const questionAndAnswerEl = container([header(question.question, 2,'question-header')]);

    for (const answer in question.answers) {
        if (!question.answers[answer]) break;
        const answerEl = paragraph(question.answers[answer], 'answer');

        if (answer === question.givenAnswer) {
            answerEl.style.border = '3px solid orange';
            const chosenAnswerCorrect = question.correct_answers[`${question.givenAnswer}_correct`] === 'true';
            //when chosen answer is correct or wrong it will add corresponding class to show visual feedback
            answerEl.classList.add(chosenAnswerCorrect ? 'correct' : 'wrong');
        } else {
            if (question.correct_answers[`${answer}_correct`] === 'true') answerEl.classList.add('correct'); //Shows correct answer to the question
        }
        questionAndAnswerEl.appendChild(answerEl);
    }
    return questionAndAnswerEl;
}

//Make the upper container of the page (score, input, buttons)
appContainer.appendChild(container([
    header('Congratulations!', 1,''),
    header(`Score: ${recentScore}`, 1,''),
    input('username', 'username'),
    button('Save', 'save-btn', saveHighscore),
    button('Play again', 'submit-btn', playAgain),
    button('Home', 'submit-btn', goHome),
    button('Highscore', 'submit-btn', goToHighscore),
    button('Go to answers', 'submit-btn', goToAnswer),
    icon('fas fa-sort-down fa-3x icon-arrow')
], 'flex-column flex-center'));

//get elements and hasSaved
const username = document.querySelector('.username');
const saveBtn = document.querySelector('.save-btn');
const hasSaved = JSON.parse(localStorage.getItem('hasSaved'));

//put save button disabled 
saveBtn.disabled = true;
if (!hasSaved) {
    username.placeholder = "username"
    //when input is given in the inputfield, the save button will be enabled. If there is nothing in the inputfield --> disabled
    username.addEventListener('keyup', (e) => {
        saveBtn.disabled = !username.value;
    })
} else { //when you have already saved once before --> disable and change
    username.placeholder = "You already saved!";
    username.style.textAlign = 'center';
    username.disabled = true;
}


answersContainer.appendChild(header('ANSWERS', 3,'answers-header'));

questionsAsked.map((question) => {
    return {...question,givenAnswer: givenAnswers[question.id]} //puts givenAnswer into the questionAsked so we can verify
}).forEach(question => {
    answersContainer.appendChild(makeAnswerOverview(question)); //call the function for each question and make the overview
});

appContainer.appendChild(answersContainer);
