/**
 * A Question Counter Component
 */

/**
 * @param {*} index Index of the question (obj)
 * @param {*} max Maximum amount of questions
 * @returns Counter for questions
 */

export const questionCounter = (index,max) =>{
    const counter = document.createElement('h2');
    counter.innerText = `Question \n${index +1} / ${max}`;
    return counter;
}