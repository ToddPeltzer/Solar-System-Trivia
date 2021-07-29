let welcomeDiv = document.querySelector('.welcomeSection')
let welcomeTitle = document.querySelector('.welcome')
let welcomeStatement = document.querySelector('.welcomeStatement')
let startButton = document.querySelector('.startGame')
let questionDiv = document.querySelector('.questionSection')
let planet = document.querySelector('.planetName') //grabbing planet name to be displayed
let question = document.querySelector('.planetQuestion') //grabbing question to be displayed
//grabbing all answer buttons
let allButtons = document.querySelectorAll('.button')
let answer1 = document.querySelector("#answer1")
let answer2 = document.querySelector("#answer2")
let answer3 = document.querySelector("#answer3")
let answer4 = document.querySelector("#answer4")

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
welcomeTitle.innerText = "Welcome to Solar System Trivia"
welcomeStatement.innerText = "Do you have what it takes to go to the great beyond?"
startButton.innerText = "Start Game"
questionDiv.style.visibility = 'hidden'


//function to get to mercury from home page
function welcomePageToMercury () {
    welcomeDiv.style.visibility = 'hidden'
    planet.innerText = 'Mercury'
    question.innerText = 'this is a question?'
    answer1.innerHTML = 'test1'
    answer2.innerText = 'test2'
    answer3.innerText = 'test3'
    answer4.innerText = 'test4'
    questionDiv.style.visibility = 'visible'
}

//button to start the game function/event
startButton.addEventListener('click', welcomePageToMercury)















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

