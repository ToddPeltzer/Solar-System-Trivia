
const welcomeDiv = document.querySelector('.welcomeSection') //set a variable for welcome div section
const startButton = document.querySelector('.startGame') //set variable for start button
const mainHomeButton = document.querySelector('#mainHome') //set variable to go home at any time

//adding life variables
const lives = document.querySelector('.lives')
const lifeCounterDiv = document.querySelector('#lifeCounterDiv')
const lifeOne = document.querySelector('#lifeOne')
const lifeTwo = document.querySelector('#lifeTwo')
const lifeThree = document.querySelector('#lifeThree')

//adding hint variables
const hintButton = document.querySelector('#hintButton') //set variable for hint
const hintButtonClose = document.querySelector('#hintClosed') //set variable for button close

//adding variables for the planet question page
const questionDiv = document.querySelector('.questionSection')
const buttonDiv = document.querySelector('.buttonDiv')
const planet = document.querySelector('.planetName')
const planetImage = document.querySelector('.planetImage')
const question = document.querySelector('.planetQuestion')

//adding rule modal elements
const rulesModalContainer = document.querySelector('#rulesModalContainer')
const ruleModalText = document.querySelector('#ruleModalText')
const ruleCloseButton = document.querySelector('#ruleClose')
const rulesButton = document.querySelector('#rulesButton')

//adding planet modal elements
const planetModalContainer = document.querySelector('#planetModalContainer')
const planetModalText = document.querySelector('#planetModalText')
const planetModalHeader = document.querySelector('#planetModalHeader')
const planetModalImageDiv = document.querySelector('#modalImagePlanet')
const planetModalImage = document.querySelector('#planetModalImage')
const planetModalFact = document.querySelector('#planetModalFact')
const planetModalButton = document.querySelector('#planetModalButton')
const planetHomeButton = document.querySelector('#planetToHome')

let counter = 0 //set variable for the counter in which our function will run through the array of objects based on correct/incorrect
let wrongAnswer = 3 //set variable for the lives in game

//planet information for questions, hints, images, etc.
const planetInformation = [
    {name: "Mercury",   image: "./images/mercury-image.png", question: "What color is Mercury's sky?",                                               answer: ["Black"],                 wrongAnswers: ["Blue", "Red", "Orange"],                                                        explination: "Mercury has no real atmosphere to scatter the Sun's rays, and so the sky appears black.",                                             hint: "Mercury has no atmosphere."},
    {name: "Venus",     image: "./images/venus-image.png",   question: "Why is Venus often referred to as Earth's sister planet?",                   answer: ["Similar size and mass"], wrongAnswers: ["Same calendar year", "Water on their surfaces", "Similar temperature"],         explination: "While Earth is slightly larger and holds more mass, if they could be viewed side by side they would appear identical.",               hint: "They could borrow eachothers outfits."},
    {name: "Earth",     image: "./images/earth-image.png",   question: "How does Earth's size compare to the other planets in our solar system?",    answer: ["Fifth-largest"],         wrongAnswers: ["Third-largest", "Fourth-largest", "Sixth-largest"],                             explination: "The order from largest to smallest planet in our solar system is Jupiter, Saturn, Uranus, Neptune, Earth, Venus, Mars, and Mercury.", hint: "The gas giants are all larger than Earth."},
    {name: "Mars",      image: "./images/mars-image.png",    question: "95 percent of Mar's atmosphere is made up of?",                              answer: ["Carbon Dioxide"],        wrongAnswers: ["Oxygen", "Nitrogen", "Carbon Monoxide"],                                        explination: "The photochemical reactions in the atmosphere tend to oxidize the organic species and turn them into carbon dioxide.",                hint: "We expell this all day."},
    {name: "Jupiter",   image: "./images/jupiter-image.png", question: "What is Jupiter's Great Red Spot?",                                          answer: ["Giant storm"],           wrongAnswers: ["Shadow from Mars", "Sunlight hitting Jupiter", "Land formation"],               explination: "Jupiter's Great Red Spot was discovered in 1830 and is suspected to be over 400 years old. It is nearly twice the size of Earth!",    hint: "Make sure to catch the weather channel for this one."},
    {name: "Saturn",    image: "./images/saturn-image.png",  question: "What shape is the storm located at Saturn's North Pole?",                    answer: ["Hexagon"],               wrongAnswers: ["Circle", "Oval", "Octagon"],                                                    explination: "This storm was spotted by Voyager 1 and confirmed on the Cassini mission. Hubble has confirmed there is no similar Southern Pole.",   hint: "It has sides."},
    {name: "Uranus",    image: "./images/uranus-image.png",  question: "What makes Uranus blue?",                                                    answer: ["Methane"],               wrongAnswers: ["Oxygen", "Nitrogen", "Sulfur"],                                         explination: "The methane in Uranus' upper atmosphere absorbs the red light from the sun and reflects blue.",                                       hint: "Cow farts!"},
    {name: "Neptune",   image: "./images/neptune-image.png", question: "What was Neptune named after?",                                              answer: ["God of the Sea"],        wrongAnswers: ["God of the Air", "God of the Land", "God of the Moon"],                         explination: "It was given this name due to its blue ocean-like color.",                                                                            hint: "Think of the color of the planet."}
]



//function to get to mercury question from the home page and bring up the lives, hint and home
function welcomePageToMercury () {
    welcomeDiv.style.display = 'none'
    questionDiv.style.display = 'block'
    lives.style.display = "flex"
    lifeThree.style.visibility = "visible"
    lifeTwo.style.visibility = "visible"
    lifeOne.style.visibility = "visible"
    wrongAnswer = 3
    lifeSource(wrongAnswer)
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

//function to bring up the hint modal and display a hint based on the current planet question
function hintModal () {
    planetModalContainer.style.display = 'block'
    hintButtonClose.style.display = 'block'
    planetModalButton.style.display = 'none'
    questionDiv.style.display = "none"
    buttonDiv.style.display = "none"
    planetHomeButton.style.display = "none"
    planetModalImageDiv.style.display = "none"
    planetModalFact.innerText = ""
    planetModalHeader.innerText = `${planetInformation[counter]['hint']}`
    hintButtonClose.innerText = "Close"
}

//function to close the hint modal
function closeHintModal () {
    questionDiv.style.display = 'block'
    buttonDiv.style.display = "block"
    planetModalContainer.style.display = 'none'
}

//function to display the lives accurately according to user input. event is going to be the wrongAnswer variable
function lifeSource (event) {

    //if one life lost, show two lives remaining
    if (event == 2) { 
        //switching displays
        lifeThree.style.visibility = "hidden"
        lifeTwo.style.visibility = "visible"
        lifeOne.style.visibility = "visible"

    //if one two lives lost, show one life remaining
    } else if (event == 1) {
        //switching displays
        lifeThree.style.visibility = "hidden"
        lifeTwo.style.visibility = "hidden"
        lifeOne.style.visibility = "visible"

    //no lives left and didn't reach the checkpoint
    } else if (event == 0 && counter < 4) {
        //switching displays
        lifeThree.style.visibility = "hidden"
        lifeTwo.style.visibility = "hidden"
        lifeOne.style.visibility = "hidden"
        questionDiv.style.display = "none"
        buttonDiv.style.display = "none"  
        hintButtonClose.style.display = 'none'
        planetModalButton.style.display = 'block'
        planetModalImageDiv.style.display = "block"
        planetModalContainer.style.display = 'block'
        planetHomeButton.style.display = 'block'
        planetModalHeader.innerText = "You ran out of lives."
        planetModalImage.src="./gifs/crash-image.gif"
        planetModalFact.innerText = ""
        planetHomeButton.innerText = "Home Page"
        planetModalButton.style.display = "none"

    //no lives but made the checkpoint
    } else if (event < 0 && counter >= 4) {
        //switching displays
        questionDiv.style.display = "none"
        buttonDiv.style.display = "none"     
        hintButtonClose.style.display = 'none'
        planetModalButton.style.display = 'block'
        planetHomeButton.style.display = 'block'
        planetModalImageDiv.style.display = "block"
        planetModalContainer.style.display = 'block'
        planetModalHeader.innerText = "Don't worry, you get to start at your checkpoint!" //adding text to modal header
        planetModalImage.src="./gifs/checkpoint.gif" //adding gif to modal
        planetModalFact.innerText = "" //clearing the modal fact section (not wanted)
        planetHomeButton.innerText = "Home Page" //making home page button text
        planetModalButton.innerText = "Back to Jupiter" //making checkpoint button text
        counter = 3 //so that the checkpoint will be jupiter (3 instead of 4 according to Will as a 'hack')
    }
}

//function to go from planet top planet if answering correctly. Also allows for restart if answer is incorrect
function planetToPlanet (num) { //num will be the counter, which starts at 0. We use this to pull fropm our object array of planet information
    //switching displays
    questionDiv.style.display = "block"
    buttonDiv.style.display = "block"
    planetModalImageDiv.style.display = "block"
    planetModalButton.style.display = 'block'
    hintButtonClose.style.display = 'none'
    planet.innerText = planetInformation[num]['name'] //gets planet name
    planetImage.src = planetInformation[num]['image'] //gets planet image
    question.innerText = planetInformation[num]['question'] //gets the question for the planet
    let answerArray = [].concat(planetInformation[num]['answer'],planetInformation[num]['wrongAnswers']) //gets the correct answer and incorrect answers into an array
    answerArray.sort(() => Math.random() - 0.5) //randomized the array we just made so answers show up in different spots

    //for each answer button, answer will be what came out of the randomized array
    answerArray.forEach(answer => {
        elementButton = document.createElement('button') //creating an element called button
        elementButton.setAttribute('class', 'inGameButtons') //setting class for buttons
        elementButton.innerText = answer //storing the random answers into buttons text 

        //adding event listener to the element buttons just created.
        elementButton.addEventListener('click', (event) => {

            //if the inner text of what was just clicked equals the FINAL answer, then victory screen appears
            if (event.target.innerText === planetInformation[7]['answer'][0]) {
                //switching displays
                questionDiv.style.display = "none" 
                buttonDiv.style.display = "none" 
                hintButtonClose.style.display = 'none' 
                planetModalButton.style.display = 'block' 
                planetModalImageDiv.style.display = "block" 
                planetModalContainer.style.display = 'block' 
                planetModalHeader.innerText = "You successfully made it out of the solar system!" //creates inner text within the in game modal
                planetModalImage.src="./gifs/escaped-image.gif" //adds an image to the in game modal
                planetModalFact.innerText = "You brought your astronaut ice cream right?..." //adds more text under the image source within the in game modal
                planetModalButton.innerText = "Turn Around!" //adds text to the button in the in game modal

                //adding event listener for when the button is clicked
                planetModalButton.addEventListener('click', () => {
                    buttonDiv.innerText = "" //clearing button text
                    counter = 0 //counter for the object array will be starting at 0 (mercury)
                    //switching displays
                    planetModalContainer.style.display = 'none'
                    buttonDiv.style.display = "none"
                    questionDiv.style.display = "none"
                    lives.style.display = "none"
                    welcomeDiv.style.display = 'block'
                })

            //if the inner text of what was just clicked equals the answer, then the next planet screen appears
            } else if (event.target.innerText === planetInformation[3]['answer'][0]) {
                //switching displays
                questionDiv.style.display = "none"
                buttonDiv.style.display = "none"
                hintButtonClose.style.display = 'none'
                planetHomeButton.style.display = "none"
                planetModalButton.style.display = 'block'
                planetModalImageDiv.style.display = "block"
                planetModalContainer.style.display = 'block'
                planetModalHeader.innerText = `You made it out of the inner solar system! A checkpoint has been made on ${planetInformation[num+1]['name']}.` //setting inner text for reaching checkpoint
                planetModalImage.src="./gifs/checkpoint-notification.gif" //gif for making checkpoint
                planetModalFact.innerText = `${planetInformation[num]['explination']}` //answer explination for the previous planet answered correctly (mars)
                planetModalButton.innerText = "Next Planet" //next planet button text

            //if inner text does not match the answer then the crash screen appears
            } else if (event.target.innerText === planetInformation[counter]['answer'][0]) {
                //switching displays
                questionDiv.style.display = "none"
                buttonDiv.style.display = "none"
                hintButtonClose.style.display = 'none'
                planetHomeButton.style.display = "none"
                planetModalButton.style.display = 'block'
                planetModalImageDiv.style.display = "block"
                planetModalContainer.style.display = 'block'
                planetModalHeader.innerText = `Nice job! You have passed ${planetInformation[num]['name']}!` //let user know they answered correctly
                planetModalImage.src="./gifs/next-level.gif" //gif for correct answer
                planetModalFact.innerText = `${planetInformation[num]['explination']}` //fact for previous planet answered correctly
                planetModalButton.innerText = "Next Planet" //next planet button text

            //if inner text does not match the answer then the crash screen appears
            } else if ((event.target.innerText !== planetInformation[counter]['answer'][0]) && (num < 4)) {
                event.target.disabled = true //blocking out wrong answer button just clicked
                wrongAnswer-- //subtracting from users lives
                lifeSource(wrongAnswer) //running life function for new life count

            //if inner text does not match the answer then the checkpoint screen appears
            } else if ((event.target.innerText !== planetInformation[counter]['answer'][0]) && (num >= 4)) {
                event.target.disabled = true //blocking out wrong answer button just clicked
                wrongAnswer-- //subtracting from users lives
                lifeSource(wrongAnswer) //running life function for new life count
            }
        })
        buttonDiv.appendChild(elementButton) //appending the buttons to the button div
    })
}

startButton.addEventListener('click', welcomePageToMercury) //button to start the game and get to the 

rulesButton.addEventListener('click', ruleScreen) //button to show the rules from the home page

ruleCloseButton.addEventListener('click', closeRuleModal) //button to close the rules modal on the home page

hintButton.addEventListener('click', hintModal) //button will bring up a hint

hintButtonClose.addEventListener('click', closeHintModal) //button will close the hint

//event listener for when the next question button is clicked in the in game modal
planetModalButton.addEventListener('click', () => {
    buttonDiv.innerText = ""
    counter++
    planetModalContainer.style.display = 'none'
    planetToPlanet(counter)
})

checkpointButton.addEventListener('click', () => {
    buttonDiv.innerText = ""
    counter =
    planetModalContainer.style.display = 'none'
    planetToPlanet(counter)
})

//button will take user back to the home screen. this is the button that comes up in the in-game modal
planetHomeButton.addEventListener('click', () => {
    welcomeDiv.style.display = "block"
    lives.style.display = "none"
    planetModalContainer.style.display = "none"
    questionDiv.style.display = "none"
    buttonDiv.style.display = "none"
    planetModalFact.innerText = ""
    counter = 0
    buttonDiv.innerText = ""
})

//button will take user back to the home screen. This is the always visible home button
mainHomeButton.addEventListener('click', () => {
    welcomeDiv.style.display = "block"
    lives.style.display = "none"
    planetModalContainer.style.display = "none"
    questionDiv.style.display = "none"
    buttonDiv.style.display = "none"
    planetModalFact.innerText = ""
    counter = 0
    buttonDiv.innerText = ""
})
