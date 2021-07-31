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
let startOverDiv = document.querySelector(".startOverDiv")

//planet information
const planetInformation = [
    {name: "mercury",   question: "Is this working1?", answer: "mercuryAnswer", wrongAnswers: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]},
    {name: "venus",     question: "Is this working2?", answer: "venusAnswer",   wrongAnswers: ["wrong answer 4", "wrong answer 5", "wrong answer 6"]},
    {name: "earth",     question: "Is this working3?", answer: "earthAnswer",   wrongAnswers: ["wrong answer 7", "wrong answer 8", "wrong answer 9"]},
    {name: "mars",      question: "Is this working4?", answer: "marsAnswer",    wrongAnswers: ["wrong answer 10", "wrong answer 11", "wrong answer 12"]},
    {name: "jupiter",   question: "Is this working5?", answer: "jupiterAnswer", wrongAnswers: ["wrong answer 13", "wrong answer 14", "wrong answer 15"]},
    {name: "saturn",    question: "Is this working6?", answer: "saturnAnswer",  wrongAnswers: ["wrong answer 16", "wrong answer 17", "wrong answer 18"]},
    {name: "uranus",    question: "Is this working7?", answer: "uranusAnswer",  wrongAnswers: ["wrong answer 19", "wrong answer 20", "wrong answer 21"]},
    {name: "neptune",   question: "Is this working8?", answer: "neptuneAnswer", wrongAnswers: ["wrong answer 22", "wrong answer 23", "wrong answer 24"]}
]

//opening page
welcomeTitle.innerText = "Welcome to Solar System Trivia"
welcomeStatement.innerText = "Do you have what it takes to go to the great beyond?"
startButton.innerText = "Start Game"
questionDiv.style.visibility = 'hidden'
startOverDiv.style.visibility = 'hidden'


//function to get to mercury from home page
function welcomePageToMercury () {
    welcomeDiv.style.visibility = 'hidden'
    planet.innerText = planetInformation[0]['name']
    question.innerText = planetInformation[0]['question']
    answer1.innerText = planetInformation[0]['answer']
    answer2.innerText = planetInformation[0]['wrongAnswers'][0]
    answer3.innerText = planetInformation[0]['wrongAnswers'][1]
    answer4.innerText = planetInformation[0]['wrongAnswers'][2]
    questionDiv.style.visibility = 'visible'
}

//button to start the game function/event
startButton.addEventListener('click', welcomePageToMercury)

function planetToPlanet () {
    if (answer1.innerText == planetInformation[0]['answer']) {
        planet.innerText = planetInformation[1]['name']
        question.innerText = planetInformation[1]['question']
        answer1.innerText = planetInformation[1]['answer']
        answer2.innerText = planetInformation[1]['wrongAnswers'][0]
        answer3.innerText = planetInformation[1]['wrongAnswers'][1]
        answer4.innerText = planetInformation[1]['wrongAnswers'][2]
    } else if (answer1.innerText == planetInformation[1]['answer']) {
        planet.innerText = planetInformation[2]['name']
        question.innerText = planetInformation[2]['question']
        answer1.innerText = planetInformation[2]['answer']
        answer2.innerText = planetInformation[2]['wrongAnswers'][0]
        answer3.innerText = planetInformation[2]['wrongAnswers'][1]
        answer4.innerText = planetInformation[2]['wrongAnswers'][2]
    } else if (answer1.innerText == planetInformation[2]['answer']) {
        planet.innerText = planetInformation[3]['name']
        question.innerText = planetInformation[3]['question']
        answer1.innerText = planetInformation[3]['answer']
        answer2.innerText = planetInformation[3]['wrongAnswers'][0]
        answer3.innerText = planetInformation[3]['wrongAnswers'][1]
        answer4.innerText = planetInformation[3]['wrongAnswers'][2]
    } else if (answer1.innerText == planetInformation[3]['answer']) {
        planet.innerText = planetInformation[4]['name']
        question.innerText = planetInformation[4]['question']
        answer1.innerText = planetInformation[4]['answer']
        answer2.innerText = planetInformation[4]['wrongAnswers'][0]
        answer3.innerText = planetInformation[4]['wrongAnswers'][1]
        answer4.innerText = planetInformation[4]['wrongAnswers'][2]
    } else if (answer1.innerText == planetInformation[4]['answer']) {
        planet.innerText = planetInformation[5]['name']
        question.innerText = planetInformation[5]['question']
        answer1.innerText = planetInformation[5]['answer']
        answer2.innerText = planetInformation[5]['wrongAnswers'][0]
        answer3.innerText = planetInformation[5]['wrongAnswers'][1]
        answer4.innerText = planetInformation[5]['wrongAnswers'][2]
    } else if (answer1.innerText == planetInformation[5]['answer']) {
        planet.innerText = planetInformation[6]['name']
        question.innerText = planetInformation[6]['question']
        answer1.innerText = planetInformation[6]['answer']
        answer2.innerText = planetInformation[6]['wrongAnswers'][0]
        answer3.innerText = planetInformation[6]['wrongAnswers'][1]
        answer4.innerText = planetInformation[6]['wrongAnswers'][2]
    } else if (answer1.innerText == planetInformation[6]['answer']) {
        planet.innerText = planetInformation[7]['name']
        question.innerText = planetInformation[7]['question']
        answer1.innerText = planetInformation[7]['answer']
        answer2.innerText = planetInformation[7]['wrongAnswers'][0]
        answer3.innerText = planetInformation[7]['wrongAnswers'][1]
        answer4.innerText = planetInformation[7]['wrongAnswers'][2]
    } else if (answer1.innerText == planetInformation[7]['answer']) {
        planet.innerText = planetInformation[8]['name']
        question.innerText = planetInformation[8]['question']
        answer1.innerText = planetInformation[8]['answer']
        answer2.innerText = planetInformation[8]['wrongAnswers'][0]
        answer3.innerText = planetInformation[8]['wrongAnswers'][1]
        answer4.innerText = planetInformation[8]['wrongAnswers'][2]
    } 
    // else if (answer1.innerText == planetInformation[8]['answer']) {
        //SEND TO VICTORY
    // } 
}
    answer1.addEventListener('click', planetToPlanet)
