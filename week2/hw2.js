const range = document.getElementById("js-range");
const title = document.querySelector("js-title");
const guessForm = document.getElementById("js-guess");
const resultspan = document.getElementById("js-result");

const handleRangeChange =(e) => {
    const selectedRange = title.querySelector("span");
    selectedRange.innerHTML =range.ariaValueMax;

};


function handleGuessSubmit(e){
    e.preventDefault();
    const guessInput = guessForm.querySelector("input");
    if (guessInput.value === ""){
        return;
    } 
    const max=range.value;
    const random=Math.ceil(Math.random()*max);
    const userGuess = parseInt(guessInput.value, 10);
    const resultspan = result.querySelector("span");
    resultspan.innerHTML = `
    you choose: ${userGuess},
    the machine choose: ${random}.<br />
    <strong>${userGuess === random ? "you won!":"youo lost!"}</strong>
    `;
}
guessForm.addEventListener("submit", handeGuessSubmit);
range.addEventlistener("input",handleRangeChange);

