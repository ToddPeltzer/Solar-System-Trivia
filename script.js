let welcomeDiv = document.querySelector('.welcomeSection') //set a variable for welcome div section
let startButton = document.querySelector('.startGame') //set variable for start button
let questionDiv = document.querySelector('.questionSection') //set variable for question div section
let buttonDiv = document.querySelector('.buttonDiv') //set variable where answer buttons will be created
let planet = document.querySelector('.planetName') //set variable where planet names will go
let planetImage = document.querySelector('.planetImage') //set variable where planet images will go
let question = document.querySelector('.planetQuestion') ////set variable where planet questions will go
let counter = 0 //set variable for the counter in which our function will run through the array of objects based on correct/incorrect
//adding rule modal elements
const rulesModalContainer = document.querySelector('#rulesModalContainer')
const ruleModalText = document.querySelector('#ruleModalText')
const ruleCloseButton = document.querySelector('#ruleClose')
const rulesButton = document.querySelector('#rulesButton')

//planet information
const planetInformation = [
    {name: "Mercury",   image: "mercury-image.jpg", question: "What color is Mercury's sky?",                                               answer: ["Black"],                  wrongAnswers: ["Blue", "Red", "Orange"],                                                                                            explination: "Mercury has no real atmosphere to scatter the Sun's rays, and so the sky appears black."},
    {name: "Venus",     image: "venus-image.jpg",   question: "Why is Venus often referred to as Earth's 'sister planet'?",                 answer: ["Similar size and mass"],  wrongAnswers: ["Same amount of days in a year", "They both have water on their surface", "They have the same temperature ranges"],  explination: "While Earth is slightly larger and holds more mass, if they could be viewed side by side they would appear identical."},
    {name: "Earth",     image: "earth-image.jpg",   question: "How does Earth's size compare to the other planets in our solar system?",    answer: ["Fifth-largest"],          wrongAnswers: ["Third-largest", "Fourth-largest", "Sixth-largest"],                                                                 explination: "The order from largest to smallest planet in our solar system is Jupiter, Saturn, Uranus, Neptune, Earth, Venus, Mars, and Mercury."},
    {name: "Mars",      image: "mars-image.jpg",    question: "95 percent of Mar's atmosphere is made up of?",                              answer: ["Carbon Dioxide"],         wrongAnswers: ["Oxygen", "Nitrogen", "Carbon Monoxide"],                                                                            explination: "The photochemical reactions in the atmosphere tend to oxidize the organic species and turn them into carbon dioxide."},
    {name: "Jupiter",   image: "jupiter-image.jpg", question: "How many Earth's could fit into Jupiter?",                                   answer: ["1,300"],                  wrongAnswers: ["1,800", "1,000", "1,500"],                                                                                          explination: "Jupiter is so big it could fit every other planet inside it."},
    {name: "Saturn",    image: "saturn-image.jpg",  question: "What shape is the storm located at Saturn's North Pole?",                    answer: ["Hexagon"],                wrongAnswers: ["Circle", "Oval", "Octagon"],                                                                                        explination: "This storm was spotted by Voyager 1 and confirmed on the Cassini mission. Hubble has confirmed there is no similar Southern Pole."},
    {name: "Uranus",    image: "uranus-image.jpg",  question: "What makes Uranus blue?",                                                    answer: ["Methane"],                wrongAnswers: ["Oxygen", "Nitrogen", "Carbon Dioxide"],                                                                             explination: "The methane in Uranus' upper atmosphere absorbs the red light from the sun and reflects blue."},
    {name: "Neptune",   image: "neptune-image.jpg", question: "What was Neptune named after?",                                              answer: ["God of the Sea"],         wrongAnswers: ["God of the Air", "God of the Land", "God of the Moon"],                                                             explination: "It was given this name due to its blue ocean-like color."}
]

const imageArray = ["/mercury-image.png", "/venus-image.png", "/earth-image.png", "/mars-image.png", "/jupiter-image.png", "/saturn-image.png", "/uranus-image.png", "/neptune-image.png",]


//function to get to mercury from home page
function welcomePageToMercury () {
    welcomeDiv.style.display = 'none'
    questionDiv.style.display = 'block'
    planetToPlanet(counter)
}

function ruleScreen () {
    rulesModalContainer.style.display = 'block'
    ruleModalText.style.display = 'block'
    welcomeDiv.style.display = 'none'
}

function closeRuleModal () {
    rulesModalContainer.style.display = 'none'
    ruleModalText.style.display = 'none'
    welcomeDiv.style.display = 'block'
}

function planetToPlanet (num) {
    questionDiv.style.display = "block"
    planet.innerText = planetInformation[num]['name']
    planetImage.src = imageArray[num]
    question.innerText = planetInformation[num]['question']

    let answerArray = [].concat(planetInformation[num]['answer'],planetInformation[num]['wrongAnswers'])
    answerArray.sort(() => Math.random() - 0.5)

    answerArray.forEach(answer => {
        elementButton = document.createElement('button')
        elementButton.innerText = answer
        elementButton.addEventListener('click', (event) => {
            if (event.target.innerText === planetInformation[counter]['answer'][0]) {
                buttonDiv.innerText = ""
                counter++
                planetToPlanet(counter)
            } else if (event.target.innerText !== planetInformation[counter]['answer'][0]) {
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

rulesButton.addEventListener('click', ruleScreen)

ruleCloseButton.addEventListener('click', closeRuleModal)

