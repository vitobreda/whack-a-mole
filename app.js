const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left')
const button = document.querySelector('#start-button')
let score = document.querySelector('#score');


let result = 0;
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })    

    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    //assing the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole() {
    console.log('exeute this')
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! your final score is' + result)
    }
}

let timerId

button.addEventListener('click', () => {
    if ((timeLeft.textContent != 0) && (timeLeft.textContent != 60)) {
        console.log('do nothing');
    } else {
        moveMole()
        timeLeft.textContent = 60;
        timerId = setInterval(countDown, 1000);
    }
});

