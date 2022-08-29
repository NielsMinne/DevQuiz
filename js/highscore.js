/**
 * Highscore Page
 */

import { container, header,scoreList ,button} from "../Components/endIndex.js";

import { APP_TITLE } from './consts.js';
document.title = APP_TITLE;

const appContainer = document.querySelector('#app');

//redirecting funcions
const returnHome = () => {
    return location.href = "../html/index.html";
}

const returnToAnswers = () => {
    return location.href = "../html/end.html#answer-container"
}

//Get the highscores from localStorage
const highscore = JSON.parse(localStorage.getItem('highscore'));

//Function to print out the highscores in list items
const highScoreList = highscore.map(score => {
    return `<li class="highscore">${score.name} | Score: ${score.score} | Time: ${Math.round(score.time/60)}:${score.time%60}</li>`;
}).join("");

//add everything to the container
appContainer.appendChild(container([
    header('High Scores', 1),
    scoreList('score-list', highScoreList),
    button('Home', 'submit-btn', returnHome),
    button('Back to answers', 'submit-btn', returnToAnswers)

], 'flex-center flex-column high-scores'));