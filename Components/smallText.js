/**
 * A Small Text Component
 */

/**
 * @param {*} text text as string
 * @returns small text
 */

export const smallText = (text) =>{
    const smallText = document.createElement('small');
    smallText.innerText= text;
    return smallText;
}