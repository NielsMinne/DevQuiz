/***
 * A Answer Component
 */

/**
 * @param {*} text text as string
 * @param {*} className Give 1 or more classnames
 * @returns An anchor tag with an answer displayed into it
 */

export const answerElement = (text,className) => {
    const answer = document.createElement('a');
    answer.className = className;
    answer.innerText = text;
    answer.href = "";
    return answer;
}
