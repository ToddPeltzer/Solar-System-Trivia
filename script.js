// let answers = document.querySelectorAll('.button') //grabbing all answer buttons
let planet = document.querySelector('.planetName') //grabbing planet name to be displayed
let question = document.querySelector('.planetQuestion') //grabbing question to be displayed
//grabbing all answer buttons
let answer1 = document.querySelector("#answer1").style.display = "none"
let answer2 = document.querySelector("#answer2").style.display = "none"
let answer3 = document.querySelector("#answer3").style.display = "none"
let answer4 = document.querySelector("#answer4").style.display = "none"

//planet information
const planetInformation = [
    {name: "mercury", answer: "mercuryAnswer", wrongAnswers: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]},
    {name: "venus", answer: "venusAnswer", wrongAnswers: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]},
    {name: "earth", answer: "earthAnswer", wrongAnswers: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]},
    {name: "mars", answer: "marsAnswer", wrongAnswers: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]},
    {name: "jupiter", answer: "jupiterAnswer", wrongAnswers: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]},
    {name: "saturn", answer: "saturnAnswer", wrongAnswers: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]},
    {name: "uranus", answer: "uranusAnswer", wrongAnswers: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]},
    {name: "neptune", answer: "neptuneAnswer", wrongAnswers: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]}
]


//opening page
document.querySelector('.welcome').innerText = "Welcome to Solar System Trivia"
document.querySelector('.welcomeStatement').innerText = "Do you have what it takes to go to the great beyond?"
document.querySelector('.startGame').innerText = "Start Game"


//opening page start if in the game
function startPage() {
    let welcome = document.querySelector('.planetName')
    welcome.innerText = "Welcome to Solar System Trivia" 
}















// //information for the planets
// let planetInformation = [
//     {name: "mercury", answer: ""},
//     {name: "venus", answer: ""},
//     {name: "earth", answer: ""},
//     {name: "mars", answer: ""},
//     {name: "jupiter", answer: ""},
//     {name: "saturn", answer: ""},
//     {name: "uranus", answer: ""},
//     {name: "neptune", answer: ""}
// ]

// //setting up pages
// //mercury
// function mercuryPage (event) {
//     answer1 = "false" //made up answer
//     answer2 = "false" //made up answer
//     answer3 = "false" //made up answer
//     answer4 = "true" //actual answer
//     if (event == answer4) {
//         mercuryQuestion.style.display = none
//         venusQuestion.style.display = appear
//     }
// }




//3 incorrect and 1 correct button generated

// function answerButton (event) {
//     answer1 = true
//     answer2 = false
//     answer3 = false
//     answer4 = false
//     if (event == answer1) {
//         console.log('correct')
//     } else {
//         console.log('incorrect')
//     }
// }




//how to transition pages idea

//function for when current page is clicked on correct answer
//current page display goes to none and current displayed page +1 goes to showing

