let answers = document.querySelectorAll('.button') //grabbing all answer buttons
let planet = document.querySelector('.planetName') //grabbing planet name to be displayed
let question = document.querySelector('.planetQuestion') //grabbing question to be displayed
let answer1 = document.querySelector("#answer1")
let answer2 = document.querySelector("#answer2")
let answer3 = document.querySelector("#answer3")
let answer4 = document.querySelector("#answer4")
//code a single page and get it to work

//3 incorrect and 1 correct button generated

function answerButton (event) {
    answer1 = true
    answer2 = false
    answer3 = false
    answer4 = false
    if (event == answer1) {
        console.log('correct')
    } else {
        console.log('incorrect')
    }
}


