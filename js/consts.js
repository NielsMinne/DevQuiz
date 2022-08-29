/**
 * A File with app constants
 */

const APP_TITLE = "Developer Quiz | Niels Minne";
const API_KEY = "ZDSoQFHsNX7m8hNWg08k6Qp8RY9TWzGUVo21vBhV";
const QUESTIONS = JSON.parse(localStorage.getItem('questions'))

export { 
    APP_TITLE,
    API_KEY,
    QUESTIONS
}