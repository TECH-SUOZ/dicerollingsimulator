const buttonEl = document.getElementById("roll-button");

const diceEl = document.getElementById("dice");
const dice2El = document.getElementById("dice2");


function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;

}

function rollDice2() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    dice2El.innerHTML = diceFace;
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

function getDice2Face(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9861;";
        case 2:
            return "&#9860;";
        case 3:
            return "&#9859;";
        case 4:
            return "&#9858;";
        case 5:
            return "&#9857;";
        case 6:
            return "&#9856;";
        default:
            return "";
    }
}

buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();
    }, 1500);
});

    buttonEl.addEventListener("click", () => {
        dice2El.classList.add("roll-animation");
        setTimeout(() => {
            dice2El.classList.remove("roll-animation");
            rollDice2();
        }, 1500);
});