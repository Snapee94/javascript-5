const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function printMessage(msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(`${argButtonName} został kliknięty`);

    const playerMove = argButtonName;
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);

    displayResult(playerMove, computerMove);
}

function getMoveName(argMoveId) {
    if (argMoveId === 1) {
        return 'kamień';
    } else if (argMoveId === 2) {
        return 'papier';
    } else if (argMoveId === 3) {
        return 'nożyce';
    } else {
        return 'kamień';
    }
}

function displayResult(playerMove, computerMove) {
    if (
        (playerMove === 'papier' && computerMove === 'kamień') ||
        (playerMove === 'kamień' && computerMove === 'nożyce') ||
        (playerMove === 'nożyce' && computerMove === 'papier')
    ) {
        printMessage('Wygrywasz!');
    } else if (playerMove === computerMove) {
        printMessage('Remis');
    } else {
        printMessage('Przegrywasz :(');
    }
    printMessage(`Zagrałem ${computerMove}, a Ty ${playerMove}`);
}

buttonRock.addEventListener('click', () => {
    buttonClicked('kamień');
});

buttonPaper.addEventListener('click', () => {
    buttonClicked('papier');
});

buttonScissors.addEventListener('click', () => {
    buttonClicked('nożyce');
});