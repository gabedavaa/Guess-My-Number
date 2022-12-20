
/*
// Select the p element using class(.) <p class="message"></p>
// You can also use an ID selector.
console.log(document.querySelector(".message"));
// Select the text content of the p elemenet (Start Guessing)
console.log(document.querySelector(".message").textContent);
// Manipulate or change the content of the p element
document.querySelector(".message").textContent = "Correct Number ✅";
console.log(document.querySelector(".message").textContent);
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
// Select and manipulate the content of an input field
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

const getMessage = function (message) {
    return (document.querySelector(".message").textContent = message);
};

const checkBtn = function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    // const audio = new Audio("cheer.mp3");

    // When there is no input
    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No number";
        // getMessage("⛔ No number");
        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Match ✅";
        // getMessage("Correct Number ✅");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        console.log(highScore)
        console.log(document.querySelector('.highscore').textContent)
        // audio.play();

        // When guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "low 🔽";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You lost the game 😿";
            document.querySelector(".score").textContent = 0;
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }

        // When guess is too high
        // } else if (guess > secretNumber) {
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Number too high 🔼";
            getMessage(guess > secretNumber ? "high 🔼" : "Too low 🔽");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You lost the game 😿";
            document.querySelector(".score").textContent = 0;
        }
    }

};

document.querySelector('.check').addEventListener('click', checkBtn);

document.querySelector(".reset").addEventListener("click", function () {
    // Reset score & secret number
    console.log(document.querySelector(".reset"))
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Reset Message, secretNumber, Score & Guess in DOM
    getMessage("Start guessing...");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    console.log(document.querySelector(".score").textContent)
    // document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".guess").value = "";

    // Reset background and width in DOM
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".highscore").textContent = '0';
    console.log(document.querySelector(".highscore").textContent)
});



