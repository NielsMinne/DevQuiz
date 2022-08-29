/**
 * A Container Component
 */

/**
 * @param {*} content Is an array of HTMLElements
 * @param {*} className Give 1 or more classnames
 * @returns Div container
 */

export const container = (content, className) => {
    const div = document.createElement('div');
    if(className) div.className = className;
    for(const element of content) {div.appendChild(element);}
    return div;
}