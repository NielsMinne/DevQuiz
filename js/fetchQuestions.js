/**
 * Fetching Questions
 */

//Fetching the questions and putting them in an array
import {API_KEY} from "../js/consts.js"

//generates an URL with parameters
const devApiUrlGenerator = ({limit = 10,difficulty = 'Easy',category = 'Code'}) => {
    return `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=${category}&difficulty=${difficulty}&limit=${limit}`;
}

  export const fetchQuestions = async (limit,difficulty,category) => {
    const url = devApiUrlGenerator({limit,difficulty,category});
    const response = await fetch(url);
    const json = await response.json();
    if(json.error) throw new Error(json.error); //to get the error message
    return json;

  
    //TO GET THE CATEGORIES (scraping)

    // const fetches = [];
    // for (let i = 0; i < 25; i++) {
    //   fetches.push(fetch("https://quizapi.io/api/v1/questions?apiKey=ZDSoQFHsNX7m8hNWg08k6Qp8RY9TWzGUVo21vBhV"));
    // }
    // fetches.reduce((allQuestionArr,question) => {
    //   })
    // const responseArr = await Promise.all(fetches);
    // const questionArr = await Promise.all (responseArr.map(async(questionRes) => await questionRes.json() ));
    // const fullQuestionArr = questionArr.flat();
    // console.log(fullQuestionArr);
    // // const questionArr = await fetchedData.json();
    // const categorySet = new Set();
    // fullQuestionArr.forEach((question) => {
    //   if(question.category) categorySet.add(question.category);
    // });
    // return categorySet;
    
  }
