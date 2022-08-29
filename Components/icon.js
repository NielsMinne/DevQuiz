/**
 * An Icon Component
 */

/**
 * @param {*} className Give classname (Font-awesome)
 * @returns Icon
 */

export const icon = (className) =>{
    const icon = document.createElement('i');
    icon.className = className;
    icon.style.color = 'orange';
    return icon;
}