let welcomeDiv = document.querySelector('.welcomeSection')
let startButton = document.querySelector('.startGame')
let questionDiv = document.querySelector('.questionSection')
let buttonDiv = document.querySelector('.buttonDiv')
let planet = document.querySelector('.planetName') //grabbing planet name to be displayed
let planetImage = document.querySelector('.planetImage')
let question = document.querySelector('.planetQuestion') //grabbing question to be displayed
let counter = 0

//planet information
const planetInformation = [
    {name: "mercury",   image: "mercury-image.jpg", question: "Is this working1?", answer: ["mercuryAnswer"], wrongAnswers: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]},
    {name: "venus",     image: "venus-image.jpg",   question: "Is this working2?", answer: ["venusAnswer"],   wrongAnswers: ["wrong answer 4", "wrong answer 5", "wrong answer 6"]},
    {name: "earth",     image: "earth-image.jpg",   question: "Is this working3?", answer: ["earthAnswer"],   wrongAnswers: ["wrong answer 7", "wrong answer 8", "wrong answer 9"]},
    {name: "mars",      image: "mars-image.jpg",    question: "Is this working4?", answer: ["marsAnswer"],    wrongAnswers: ["wrong answer 10", "wrong answer 11", "wrong answer 12"]},
    {name: "jupiter",   image: "jupiter-image.jpg", question: "Is this working5?", answer: ["jupiterAnswer"], wrongAnswers: ["wrong answer 13", "wrong answer 14", "wrong answer 15"]},
    {name: "saturn",    image: "saturn-image.jpg",  question: "Is this working6?", answer: ["saturnAnswer"],  wrongAnswers: ["wrong answer 16", "wrong answer 17", "wrong answer 18"]},
    {name: "uranus",    image: "uranus-image.jpg",  question: "Is this working7?", answer: ["uranusAnswer"],  wrongAnswers: ["wrong answer 19", "wrong answer 20", "wrong answer 21"]},
    {name: "neptune",   image: "neptune-image.jpg", question: "Is this working8?", answer: ["neptuneAnswer"], wrongAnswers: ["wrong answer 22", "wrong answer 23", "wrong answer 24"]}
]

const imageArray = ["/mercury-image.jpg", "/venus-image.jpg", "/earth-image.jpg", "/mars-image.jpg", "/jupiter-image.jpg", "/saturn-image.jpg", "/uranus-image.jpg", "/neptune-image.jpg",]





//opening page
questionDiv.style.visibility = 'hidden'


//function to get to mercury from home page
function welcomePageToMercury () {
    welcomeDiv.style.visibility = 'hidden'
    questionDiv.style.visibility = 'visible'
    planetToPlanet(counter)
}


function planetToPlanet (num) {
    planet.innerText = planetInformation[num]['name']
    planetImage.src = imageArray[num]
    question.innerText = planetInformation[num]['question']

    let answerArray = [].concat(planetInformation[num]['answer'],planetInformation[num]['wrongAnswers'])
    answerArray.sort(() => Math.random() - 0.5)
    console.log(answerArray)

    answerArray.forEach(answer => {
        elementButton = document.createElement('button')
        elementButton.innerText = answer
        elementButton.addEventListener('click', (event) => {
            if (event.target.innerText === planetInformation[counter]['answer'][0]) {
                buttonDiv.innerText = ""
                counter++
                planetToPlanet(counter)
            } else if (event.target.innerText !== planetInformation[counter]['answer'][0]) {
                console.log(event)
                buttonDiv.innerText = ""
                counter = 0
                planetToPlanet(counter)
                
            }
        })

        buttonDiv.appendChild(elementButton)

    })

}



//button to start the game function/event
startButton.addEventListener('click', welcomePageToMercury)