/**
 * A Spinning Loader Component
 */

/**
 * @returns Spinning loader
 */

import { container } from "./container.js"

export const loader = () =>{
const spinnerContainer  = container([],'loader');
return container([spinnerContainer],'loader-container');
}