const welcomeDiv = document.querySelector('.welcomeSection') //set a variable for welcome div section
const startButton = document.querySelector('.startGame') //set variable for start button
const questionDiv = document.querySelector('.questionSection') //set variable for question div section
const buttonDiv = document.querySelector('.buttonDiv') //set variable where answer buttons will be created
const planet = document.querySelector('.planetName') //set variable where planet names will go
const planetImage = document.querySelector('.planetImage') //set variable where planet images will go
const question = document.querySelector('.planetQuestion') ////set variable where planet questions will go
let counter = 0 //set variable for the counter in which our function will run through the array of objects based on correct/incorrect
//adding rule modal elements
const rulesModalContainer = document.querySelector('#rulesModalContainer')
const ruleModalText = document.querySelector('#ruleModalText')
const ruleCloseButton = document.querySelector('#ruleClose')
const rulesButton = document.querySelector('#rulesButton')
//adding planet modal elements
const planetModalContainer = document.querySelector('#planetModalContainer')
const planetModalText = document.querySelector('#planetModalText')
const planetModalHeader = document.querySelector('#planetModalHeader')
const planetModalImage = document.querySelector('#planetModalImage')
const planetModalFact = document.querySelector('#planetModalFact')
const planetModalButton = document.querySelector('#planetModalButton')
const planetHomeButton = document.querySelector('#planetToHome')

//planet information
const planetInformation = [
    {name: "Mercury",   image: "./images/mercury-image.png", question: "What color is Mercury's sky?",                                               answer: ["Black"],                              wrongAnswers: ["Blue", "Red", "Orange"],                                                                                                                        explination: "Mercury has no real atmosphere to scatter the Sun's rays, and so the sky appears black."},
    {name: "Venus",     image: "./images/venus-image.png",   question: "Why is Venus often referred to as Earth's sister planet?",                   answer: ["They have a similar size and mass"],  wrongAnswers: ["They have the same amount of days in a year", "They both have water on their surface", "They have the same temperature ranges"],                explination: "While Earth is slightly larger and holds more mass, if they could be viewed side by side they would appear identical."},
    {name: "Earth",     image: "./images/earth-image.png",   question: "How does Earth's size compare to the other planets in our solar system?",    answer: ["Fifth-largest"],                      wrongAnswers: ["Third-largest", "Fourth-largest", "Sixth-largest"],                                                                                             explination: "The order from largest to smallest planet in our solar system is Jupiter, Saturn, Uranus, Neptune, Earth, Venus, Mars, and Mercury."},
    {name: "Mars",      image: "./images/mars-image.png",    question: "95 percent of Mar's atmosphere is made up of?",                              answer: ["Carbon Dioxide"],                     wrongAnswers: ["Oxygen", "Nitrogen", "Carbon Monoxide"],                                                                                                        explination: "The photochemical reactions in the atmosphere tend to oxidize the organic species and turn them into carbon dioxide."},
    {name: "Jupiter",   image: "./images/jupiter-image.png", question: "How many Earth's could fit into Jupiter?",                                   answer: ["1,300"],                              wrongAnswers: ["1,800", "1,000", "1,500"],                                                                                                                      explination: "Jupiter is so big it could fit every other planet inside it."},
    {name: "Saturn",    image: "./images/saturn-image.png",  question: "What shape is the storm located at Saturn's North Pole?",                    answer: ["Hexagon"],                            wrongAnswers: ["Circle", "Oval", "Octagon"],                                                                                                                    explination: "This storm was spotted by Voyager 1 and confirmed on the Cassini mission. Hubble has confirmed there is no similar Southern Pole."},
    {name: "Uranus",    image: "./images/uranus-image.png",  question: "What makes Uranus blue?",                                                    answer: ["Methane"],                            wrongAnswers: ["Oxygen", "Nitrogen", "Carbon Dioxide"],                                                                                                         explination: "The methane in Uranus' upper atmosphere absorbs the red light from the sun and reflects blue."},
    {name: "Neptune",   image: "./images/neptune-image.png", question: "What was Neptune named after?",                                              answer: ["God of the Sea"],                     wrongAnswers: ["God of the Air", "God of the Land", "God of the Moon"],                                                                                         explination: "It was given this name due to its blue ocean-like color."}
]

//function to get to mercury from home page
function welcomePageToMercury () {
    welcomeDiv.style.display = 'none'
    questionDiv.style.display = 'block'
    planetToPlanet(counter)
}

//function for click event to open astronaut tips
function ruleScreen () {
    rulesModalContainer.style.display = 'block'
    welcomeDiv.style.display = 'none'
}

//function to close out of the astronaut tip section
function closeRuleModal () {
    rulesModalContainer.style.display = 'none'
    welcomeDiv.style.display = 'block'
}

//function to go from planet top planet if answering correctly. Also allows for restart if answer is incorrect
function planetToPlanet (num) { //num will be the counter, which starts at 0. We use this to pull fropm our object array of planet information
    questionDiv.style.display = "block" //the question div is now visible
    buttonDiv.style.display = "block" //the button div is now visible
    planet.innerText = planetInformation[num]['name'] //gets planet name
    planetImage.src = planetInformation[num]['image'] //gets planet image
    question.innerText = planetInformation[num]['question'] //gets the question for the planet
    let answerArray = [].concat(planetInformation[num]['answer'],planetInformation[num]['wrongAnswers']) //gets the correct answer and incorrect answers into an array
    answerArray.sort(() => Math.random() - 0.5) //randomized the array we just made so answers show up in different spots

    answerArray.forEach(answer => { //for each answer button, answer will be what came out of the randomized array
        elementButton = document.createElement('button') //creating an element called button
        elementButton.innerText = answer //storing the random answers into buttons text 
        //adding event listener to the element buttons just created.
        elementButton.addEventListener('click', (event) => {
            //if the inner text of what was just clicked equals the FINAL answer, then victory screen appears
            if (event.target.innerText === planetInformation[7]['answer'][0]) {
                questionDiv.style.display = "none" //makes the question section diusappear from the screen
                buttonDiv.style.display = "none" //bakes the buttons that were created disappear
                planetModalContainer.style.display = 'block' //has the in game modal appear
                planetModalHeader.innerText = "You successfully made it out of the solar system!" //creates inner text within the in game modal
                planetModalImage.src="./gifs/escaped-image.gif" //adds an image to the in game modal
                planetModalFact.innerText = "You brought your astronaut ice cream right?..." //adds more text under the image source within the in game modal
                planetModalButton.innerText = "Return Home" //adds text to the button in the in game modal
                //add event listener for when the button is clicked
                planetModalButton.addEventListener('click', () => {
                    buttonDiv.innerText = ""
                    counter = 0
                    planetModalContainer.style.display = 'none'
                    buttonDiv.style.display = "none"
                    questionDiv.style.display = "none"
                    welcomeDiv.style.display = 'block'
                })
            //if the inner text of what was just clicked equals the answer, then the next planet screen appears
            } else if (event.target.innerText === planetInformation[3]['answer'][0]) {
                questionDiv.style.display = "none"
                buttonDiv.style.display = "none"
                planetHomeButton.style.display = "none"
                planetModalContainer.style.display = 'block'
                planetModalHeader.innerText = `Congratulations, you made it to ${planetInformation[num+1]['name']}! This is your checkpoint for making it to the first gas giant.`
                planetModalImage.src="./gifs/checkpoint-notification.gif"
                planetModalFact.innerText = `Answer explination: ${planetInformation[num]['explination']}`
                planetModalButton.innerText = "Next Planet"
            //if inner text does not match the answer then the crash screen appears
            } else if (event.target.innerText === planetInformation[counter]['answer'][0]) {
                questionDiv.style.display = "none"
                buttonDiv.style.display = "none"
                planetHomeButton.style.display = "none"
                planetModalContainer.style.display = 'block'
                planetModalHeader.innerText = `Nice job! You have passed ${planetInformation[num]['name']}!`
                planetModalImage.src="./gifs/next-level.gif"
                planetModalFact.innerText = `${planetInformation[num]['explination']}`
                planetModalButton.innerText = "Next Planet"
            //if inner text does not match the answer then the crash screen appears
            } else if ((event.target.innerText !== planetInformation[counter]['answer'][0]) && (num < 4)) {
        //ADD IN THE LIVES AND BUTTON DISABLE HERE as an 'if' statement        
                questionDiv.style.display = "none"
                buttonDiv.style.display = "none"
        //this below will be the same for the 'else if' part of the nested if statement  
        //can also add checkpoint for anything over '4' or whatever number for checkpoint
        //reset lives on checkpoint      
                planetModalContainer.style.display = 'block'
                planetHomeButton.style.display = 'block'
                planetModalHeader.innerText = "Oh no! You crashed!"
                planetModalImage.src="./gifs/crash-image.gif"
                planetModalFact.innerText = ""
                planetHomeButton.innerText = "Home Page"
                planetModalButton.innerText = "Back to Mercury"
                counter = -1 //hack from Will
            } else if ((event.target.innerText !== planetInformation[counter]['answer'][0]) && (num >= 4)) {
                        questionDiv.style.display = "none"
                        buttonDiv.style.display = "none"     
                        planetHomeButton.style.display = 'block'
                        planetModalContainer.style.display = 'block'
                        planetModalHeader.innerText = "Don't worry, you get to start at your checkpoint!"
                        planetModalImage.src="./gifs/checkpoint.gif"
                        planetModalFact.innerText = ""
                        planetHomeButton.innerText = "Home Page"
                        planetModalButton.innerText = "Back to Jupiter"
                        counter = 3 //hack from Will
                    }
        })
        buttonDiv.appendChild(elementButton) //appending the buttons to the button div
        //answer button styling
        buttonDiv.style.display = 'flex-wrap'
        buttonDiv.style.justifyContent = 'center'
        elementButton.style.margin = '20px'
        elementButton.style.width = '200px'
        elementButton.style.height = '50px'
    })
}

startButton.addEventListener('click', welcomePageToMercury) //button to start the game and get to the 

rulesButton.addEventListener('click', ruleScreen) //button to show the rules from the home page

ruleCloseButton.addEventListener('click', closeRuleModal) //button to close the rules modal on the home page

//event listener for when the next question button is clicked in the in game modal
planetModalButton.addEventListener('click', () => {
    buttonDiv.innerText = ""
    counter++
    planetModalContainer.style.display = 'none'
    planetToPlanet(counter)
})

planetHomeButton.addEventListener('click', () => {
    welcomeDiv.style.display = "block"
    planetModalContainer.style.display = "none"
    questionDiv.style.display = "none"
    buttonDiv.style.display = "none"
    planetModalFact.innerText = ""
    counter = 0
    buttonDiv.innerText = ""
})