/**
 * An Image Component
 */

/**
 * @param {*} path Give path to the image (url)
 * @param {*} className Give 1 or more classnames
 * @returns Image
 */

export const image = (path,className) =>{
    const image = document.createElement('img');
    image.className = className;
    image.src = path;
    return image;
}