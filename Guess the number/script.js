let secretNumber = Math.trunc(Math.random() * 20 + 1);
let points = 20;
let highScore = 0;
const body = document.querySelector("body");
const display = document.querySelector(".number");
const score = document.querySelector(".score");
const msg = document.querySelector(".message");
const high = document.querySelector(".highscore");
function guessNumber() {
    //variables//
    const guess = Number(document.querySelector(".guess").value);
    //No input//
    if (!guess) {
        msg.textContent = `⛔ No number!`;
    }
    //Correct guess//
    else if (guess === secretNumber) {
        msg.textContent = `🎉 Correct Number!`;
        display.textContent = secretNumber;
        body.style.backgroundColor = '#60b347';
        display.style.width = '30rem';
        if (points > highScore) {
            highScore = points;
            high.textContent = highScore;
        }
    }
    // Not correct guess//
    else if (guess !== secretNumber) {
        if (points > 1) {
            msg.textContent = guess > secretNumber ? `📈Too High!` : `📉Too Low!`;
            points--;
            score.textContent = points;
        } else {
            msg.textContent = `💥 You lost the game!`;
            score.textContent = 0;
        }
    }
}
function resetData() {
    points = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    let guess = document.querySelector(".guess");
    guess.value = '';
    msg.textContent = `Start guessing...`;
    score.textContent = points;
    body.style.backgroundColor = '#222';
    display.textContent = "?";
    display.style.width = '15rem';
}