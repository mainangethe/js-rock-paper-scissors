const buttons = document.querySelectorAll('button');
const scoresTable = document.getElementById('Standings');
const results = scoresTable.insertRow();
const computer_options =  [
                            'Rock',
                            'Paper',
                            'Scissors'
                          ];

buttons.forEach(button => button.addEventListener('click', playRound));
let player_wins_stats = 0;
let computer_wins_stats = 0;
let gameTurns = 0;

let computerScores = results.insertCell();
let playerScores = results.insertCell();

function playRound(event) {

  if (event == null) return;
  let user_choice = event.target.id;
  let computer_choice = computerPlay();
  addTurns();
  getGamplayHistory (user_choice, computer_choice);
  displayGameScores();
  game();

}
function computerPlay() {
  let computer_choice = computer_options[ Math.floor( Math.random() * 3 ) ];
  return computer_choice;
}
function getRoundWinner( user_choice, computer_choice ) {

  let player_wins = `You Win! ${ user_choice } beats ${ computer_choice }.`;
  let computer_wins = `You Lose! ${ computer_choice } beats ${ user_choice }.`;
  let tie_message = `It's a tie!, You both selected ${computer_choice}.`;

  if( computer_choice === 'Rock' && user_choice == 'Paper'){
    addPlayerWin();
    return player_wins;
  }
  else if( computer_choice === 'Rock' && user_choice == 'Scissors'){
  addComputerWin();
  return computer_wins;
  }
  else if( computer_choice === 'Rock' && user_choice == 'Rock') {
    return tie_message;
  }

  else if( computer_choice === 'Paper' && user_choice == 'Paper'){
    return tie_message;
  }
  else if( computer_choice === 'Paper' && user_choice == 'Scissors'){
    addPlayerWin();
    return player_wins;
  }
  else if( computer_choice === 'Paper' && user_choice == 'Rock') {
    addComputerWin();
    return computer_wins;
  }

  else if( computer_choice === 'Scissors' && user_choice == 'Paper'){
    addComputerWin();
    return computer_wins;
  }
  else if( computer_choice === 'Scissors' && user_choice == 'Scissors'){
    return tie_message;
  }
  else if( computer_choice === 'Scissors' && user_choice == 'Rock') {
    addPlayerWin();
    return player_wins;
  }

  else {
    addComputerWin();
    return computer_wins;
  }

}
function addTurns() { gameTurns++; }
function addPlayerWin() { ++player_wins_stats; }
function getPlayerWins() { return player_wins_stats; }
function addComputerWin() { ++computer_wins_stats; }
function getComputerWins() { return computer_wins_stats; }
function displayGameScores() {
  computerScores.textContent = getComputerWins();
  playerScores.textContent = getPlayerWins();
  scoresTable.appendChild(results);
}
function game() {
  const game_rounds = 5;
  const gameOverTune = document.querySelector(`audio[data-key = "1"]`);
  let finalTune;

  if (gameTurns == game_rounds) {
    buttons.forEach(button => button.disabled = true);

    if (player_wins_stats > computer_wins_stats) {
      finalTune = document.querySelector(`audio[data-key = "3"]`);
    }
    else if (player_wins_stats < computer_wins_stats) {
      finalTune = document.querySelector(`audio[data-key = "4"]`);
    }
    else {
      finalTune = document.querySelector(`audio[data-key='2']`);
    }
    finalTune.play();
  }

}
function getGamplayHistory (user_choice, computer_choice) {
  let resultsSection = document.querySelector('.game-results');
  let roundResult = document.createElement('p');
  roundResult.textContent = `Round ${gameTurns}: ` +getRoundWinner( user_choice, computer_choice );
  resultsSection.appendChild(roundResult);
}
