const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];

  const i = Math.floor(Math.random() * choices.length);
  return choices[i];
};

const getPlayerChoice = () => {
  // no input validation is fine here for now
  const playerChoice = prompt('Rock, paper, scissors - SHOOT!');
  return playerChoice;
};

const playGame = () => {
  let playerScore = 0;
  let computerScore = 0;

  const playRound = (playerChoice, computerChoice) => {
    const beats = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper',
    };

    const normalizedPlayerChoice = playerChoice.toLowerCase();
    const normalizedComputerChoice = computerChoice.toLowerCase();

    console.log('player: ', normalizedPlayerChoice);
    console.log('computer: ', normalizedComputerChoice);

    if (normalizedPlayerChoice === normalizedComputerChoice) {
      console.log('Tie!');
    } else if (beats[normalizedPlayerChoice] === normalizedComputerChoice) {
      console.log('Player wins!');
      playerScore++;
    } else {
      console.log('Computer wins!');
      computerScore++;
    }
  };

  for(let i = 0; i < 5; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
    console.log("")
  }

  console.log(
    `Final Score - Player: ${playerScore}, Computer: ${computerScore}`,
  );

  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game is a tie!");
  }
};

console.log('Welcome to Rock, Paper, Scissors!');
playGame();
