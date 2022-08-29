/**
 * A Paragraph Component
 */

/**
 * @param {*} text text as string
 * @param {*} className Give 1 or more classnames
 * @returns Paragraph
 */

export const paragraph= (text,className) =>{
    const paragraph = document.createElement('p');
    paragraph.innerText = text;
    paragraph.className = className;
    return paragraph;
}