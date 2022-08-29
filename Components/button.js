/**
 *  A Button Component
 */

/**
 * @param {*} text Text as string
 * @param {*} className Give 1 or more classnames 
 * @param {*} onClick Insert a function to execute when the button is clicked
 * @returns Button
 */

export const button = (text, className = "submitBtn", onClick = (e) => {e.preventDefault()}) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = className;
    button.addEventListener('click', onClick);
    return button;
}