/**
 * An Input Field Component
 */

/**
 * @param {*} placeholder Text as string to set placeholder text
 * @param {*} className Give 1 or more classnames
 * @returns Inputfield
 */

export const input = (placeholder, className) => {
    const inputField = document.createElement('input');
    inputField.placeholder = placeholder;
    inputField.className = className;
    return inputField;
}