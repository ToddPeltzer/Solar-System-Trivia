let welcomeDiv = document.querySelector('.welcomeSection')
let welcomeTitle = document.querySelector('.welcome')
let welcomeStatement = document.querySelector('.welcomeStatement')
let startButton = document.querySelector('.startGame')
let questionDiv = document.querySelector('.questionSection')
let planet = document.querySelector('.planetName') //grabbing planet name to be displayed
let planetImage = document.querySelector('.planetImage')
let question = document.querySelector('.planetQuestion') //grabbing question to be displayed
//grabbing all answer buttons
let allButtons = document.querySelectorAll('.button')
let answer1 = document.querySelector("#answer1")
let answer2 = document.querySelector("#answer2")
let answer3 = document.querySelector("#answer3")
let answer4 = document.querySelector("#answer4")
let startOverDiv = document.querySelector(".startOverDiv")
let counter = 0

//planet information
const planetInformation = [
    {name: "mercury",   image: "mercury-image.jpg", question: "Is this working1?", answer: "mercuryAnswer", wrongAnswers: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]},
    {name: "venus",     image: "venus-image.jpg",   question: "Is this working2?", answer: "venusAnswer",   wrongAnswers: ["wrong answer 4", "wrong answer 5", "wrong answer 6"]},
    {name: "earth",     image: "earth-image.jpg",   question: "Is this working3?", answer: "earthAnswer",   wrongAnswers: ["wrong answer 7", "wrong answer 8", "wrong answer 9"]},
    {name: "mars",      image: "mars-image.jpg",    question: "Is this working4?", answer: "marsAnswer",    wrongAnswers: ["wrong answer 10", "wrong answer 11", "wrong answer 12"]},
    {name: "jupiter",   image: "jupiter-image.jpg", question: "Is this working5?", answer: "jupiterAnswer", wrongAnswers: ["wrong answer 13", "wrong answer 14", "wrong answer 15"]},
    {name: "saturn",    image: "saturn-image.jpg",  question: "Is this working6?", answer: "saturnAnswer",  wrongAnswers: ["wrong answer 16", "wrong answer 17", "wrong answer 18"]},
    {name: "uranus",    image: "uranus-image.jpg",  question: "Is this working7?", answer: "uranusAnswer",  wrongAnswers: ["wrong answer 19", "wrong answer 20", "wrong answer 21"]},
    {name: "neptune",   image: "neptune-image.jpg", question: "Is this working8?", answer: "neptuneAnswer", wrongAnswers: ["wrong answer 22", "wrong answer 23", "wrong answer 24"]}
]

const imageArray = ["/mercury-image.jpg", "/venus-image.jpg", "/earth-image.jpg", "/mars-image.jpg", "/jupiter-image.jpg", "/saturn-image.jpg", "/uranus-image.jpg", "/neptune-image.jpg",]

//opening page
questionDiv.style.visibility = 'hidden'
startOverDiv.style.visibility = 'hidden'


//function to get to mercury from home page
function welcomePageToMercury () {
    welcomeDiv.style.visibility = 'hidden'
    questionDiv.style.visibility = 'visible'
    planetToPlanet(counter)
}


//getting from planet to planet 
function planetToPlanet (num) {
    planet.innerText = planetInformation[num]['name']
    planetImage.src = imageArray[num]
    question.innerText = planetInformation[num]['question']
    answer1.innerText = planetInformation[num]['answer']
    answer2.innerText = planetInformation[num]['wrongAnswers'][0]
    answer3.innerText = planetInformation[num]['wrongAnswers'][1]
    answer4.innerText = planetInformation[num]['wrongAnswers'][2] 
}


//if answer1 is clicked, will go to the next page
answer1.addEventListener('click', () => {
    counter++
    planetToPlanet(counter)
})


//button to start the game function/event
startButton.addEventListener('click', welcomePageToMercury)
