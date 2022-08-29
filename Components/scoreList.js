/***
 * A List Component
 */

/**
 * @param {*} className Give 1 or more classnames
 * @param {*} highscores Give a highscore
 * @returns List of Highscores
 */

 export const scoreList= (className,highscores) =>{
    const scoreList = document.createElement('ul');
    scoreList.className = className;
    scoreList.innerHTML = highscores;
    return scoreList;
}