let userInput = document.querySelector(".user-input")
let randomNumber = Math.floor(Math.random()*100)
const form = document.querySelector("form")
const startbtn = document.querySelector(".start-game")
let submitbtn = document.querySelector(".submit-btn")
let result = document.querySelector(".result")
const guessNumber = document.querySelector(".guess-number")
const allguessesArray = []


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const userInputValue = parseInt(userInput.value);
    if(userInputValue > randomNumber){
        result.innerText = 'Too high!'
    }else if(userInputValue < randomNumber){
        result.innerText = 'Too low!'
    }else{
        result.innerText = 'Congrats!!!'
        submitbtn.disabled = true
        submitbtn.style.cursor = "not-allowed"
        startbtn.disabled = false
    }
    allguessesArray.push(userInputValue)
    guessNumber.innerText = `Your guesses: `+ allguessesArray.join(", ")
    form.reset()
})
startbtn.addEventListener("click",()=>{
    randomNumber = Math.floor(Math.random()*100)
    submitbtn.disabled = false
    submitbtn.style.cursor = "pointer"
    allguessesArray.length = 0
    result.innerText = ""
    guessNumber.innerText = ""
    startbtn.disabled = true
})

