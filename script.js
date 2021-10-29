function rpsGame(userChoiceElement) {

    var rpsArray = ['rock', 'paper', 'scissor'];

    var userChoice = userChoiceElement.id;
    var computerChoice = rpsArray[rpsIndex()];
    console.log(computerChoice);


    var decideWinner = play(userChoice, computerChoice);
    console.log(decideWinner);

    var message = getMessage(decideWinner[0]);
    console.log(message);
    rpsFrontEnd(userChoice, message, computerChoice);

    document.querySelector('.playAgainBtn').style.display = 'block';
    // document.getElementById('rps-container').disabled = true;
    document.getElementById('rps-container').style.pointerEvents = 'none';

}

function rpsIndex() {
    return Math.floor((Math.random() * 3));
}

function play(userChoice, computerChoice) {
    var winnerDatabase = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 0 },
    }

    return [winnerDatabase[userChoice][computerChoice], winnerDatabase[computerChoice][userChoice]]
}

function getMessage(result) {
    if (result === 1) {
        return { 'message': "You Won!", 'color': "green" }
    } else if (result === 0.5) {
        return { 'message': "You Tied!", 'color': "peru" }
    } else {
        return { 'message': "You Lose!", 'color': 'red' }
    }
}

function rpsFrontEnd(userChoice, message, computerChoice) {

    // let user = document.createElement('img');
    let userChoiceImg = document.getElementById(userChoice);
    // let computer = document.createElement('img');
    let computerChoiceImg = document.getElementById(computerChoice);


    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    document.querySelector('.first').innerHTML = `<img class="${userChoice}" id="${userChoice}" onclick="rpsGame(this)" src="${userChoiceImg.src}" height="150" width="150" alt=""></img>`;
    document.querySelector('.first').style.boxShadow = '0px 7px 30px rgba(0, 81, 255, 0.623)';

    let finalMessage = document.querySelector('.second');

    finalMessage.innerHTML = `<h1 class="text-center" style='color:${message['color']}'>${message['message']}</h1>`;


    document.querySelector('.third').innerHTML = `<img class="${computerChoice}" id="${computerChoice}" onclick="rpsGame(this)" src="${computerChoiceImg.src}" height="150" width="150" alt=""></img>`;
    document.querySelector('.third').style.boxShadow = '0px 7px 30px #ff000094';
}

function playAgain() {
    location.reload();
}