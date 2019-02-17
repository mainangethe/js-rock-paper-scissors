const computer_options =  [
                            'Rock',
                            'Paper',
                            'Scissors'
                          ];
let player_wins_stats = 0;
let computer_wins_stats = 0;

function computerPlay() {
  let computer_choice = computer_options[ Math.floor( Math.random() * 3 ) ];
  return computer_choice;
}

function userPlay() {
  let user_choice = prompt("This is Rock Paper Scissors. Choose your option", '');
  return user_choice;
}

function parserPlayerAnswer( player_answer ){
  let sanitized_answer;
  if (
      player_answer === null ||
      player_answer === 'undefinded' ||
      player_answer === '' ||
      player_answer === ' ') {
    alert( 'Please reselect your option' );
    parserPlayerAnswer( userPlay() );
  }
  else
  {
      sanitized_answer = player_answer.toLowerCase();
  }

  return sanitized_answer;
}

function playRound() {
  let user_choice = userPlay();
  let computer_choice = computerPlay();
  let winner_message;

winner_message = getRoundWinner( user_choice, computer_choice );
return winner_message;
}

function getRoundWinner( user_choice, computer_choice ) {
  user_choice = parserPlayerAnswer(user_choice);
  let player_wins = `You Win! ${ user_choice } beats ${ computer_choice }.`;
  let computer_wins = `You Lose! ${ computer_choice } beats ${ user_choice }.`;
  let tie_message = `It's a tie!, You both selected ${computer_choice}.`;

  if( computer_choice === 'Rock' && user_choice == 'paper'){
    calculatePlayerWin();
    return player_wins;
  }
  else if( computer_choice === 'Rock' && user_choice == 'scissors'){
  calculateComputerWin();
  return computer_wins;
  }
  else if( computer_choice === 'Rock' && user_choice == 'rock') {
    return tie_message;
  }

  else if( computer_choice === 'Paper' && user_choice == 'paper'){
    return tie_message;
  }
  else if( computer_choice === 'Paper' && user_choice == 'scissors'){
    calculatePlayerWin();
    return player_wins;
  }
  else if( computer_choice === 'Paper' && user_choice == 'rock') {
    calculateComputerWin();
    return computer_wins;
  }

  else if( computer_choice === 'Scissors' && user_choice == 'paper'){
    calculateComputerWin();
    return computer_wins;
  }
  else if( computer_choice === 'Scissors' && user_choice == 'scissors'){
    return tie_message;
  }
  else if( computer_choice === 'Scissors' && user_choice == 'rock') {
    calculatePlayerWin();
    return player_wins;
  }

  else {
    calculateComputerWin();
    return computer_wins;
  }

}

function calculatePlayerWin() { ++player_wins_stats; }
function getPlayerWins() { return player_wins_stats; }
function calculateComputerWin() { ++computer_wins_stats; }
function getComputerWins() { return computer_wins_stats; }

function game() {
  const game_rounds = 5;
  let scores = [];

  for(i = 0; i < game_rounds; i++){

    let round_winner = playRound();
    scores.push(`\nRound ${i + 1} \n ${round_winner} \n Player Score: ${ getPlayerWins() } \n Computer Score:  ${ getComputerWins() }.\n`)
    console.log(scores);
  }
  if (player_wins_stats > computer_wins_stats){
    winner_message = "YOU WON THE GAME!! KUDOS\n"
  }

  else if (player_wins_stats == computer_wins_stats){
    winner_message = "DRAW! NG'ANG'ANA HAPO, AMA NAMNA GANI MY FREN?\n"
  }
  else {
    winner_message = "YOU SUCK BRO!! KULAA HIO!!\n"
  }
  return winner_message + scores;
}



console.log( game() );
