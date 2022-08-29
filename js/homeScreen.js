/**
 * Welcome Screen 
 */

import {container, header, paragraph, image, button, smallText} from '../Components/startIndex.js';

import { APP_TITLE } from './consts.js';
document.title = APP_TITLE;

const appContainer = document.querySelector('#app');

const goToChoices = (e) => {
    return location.href = '../html/quizChoice.html'
}

const goToHighscore = (e) => {
    return location.href = '../html/highscore.html'
}

//append all components
appContainer.appendChild(
    container([
        container([
                header('Developer Quiz', 1),
                paragraph('Test your programming knowledge!')]),
    image('../assets/quiz-image.png','quiz-image'),
    button('Play','submit-btn play-btn', goToChoices),
    button('Highscores','submit-btn highscore-btn', goToHighscore),
    smallText('Made by Niels Minne | Mob Dev 1 | 2021-2022')
],'flex-center flex-column'));

//Disables the highscore button if there are no highscores submitted (at start)
const highscoreBtn = document.querySelector('.highscore-btn');
if (!localStorage.getItem('highscore')) {
    highscoreBtn.disabled = true;
}