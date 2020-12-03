const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game with "Let's Play!" button
  const gameStart = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //Gameplay:
  const gameplay = () => {
    const options = document.querySelectorAll(".options button");
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Generating random number from 0-2
        const computerNumber = Math.floor(
          Math.random() * computerOptions.length
        );
        const computerChoice = computerOptions[computerNumber]; //Applying random number to options array
        console.log(computerChoice);
        scoreCompare(this.textContent, computerChoice);
      });
    });
  };

  //Updating Score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };
  //Ending the game and disabling buttons
  const endgame = () => {
    const disableBtn = document.querySelector(".options");

    if (pScore === 5) {
      pointer.textContent =
        "Congratz! You win the game! Refresh to play again :)";
      disableBtn.classList.add("disableButtons");
    } else if (cScore === 5) {
      pointer.textContent =
        "Computer wins the game :( Refresh the page and play again! :)";
      disableBtn.classList.add("disableButtons");
    }
  };

  //Player's choice is compared with computer choice

  const pointer = document.querySelector(".pointer");

  const scoreCompare = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      pointer.textContent = "It's a tie!";
      return;
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      pointer.textContent = "Player wins! Let's get to the next round";
      pScore++;
      updateScore();
      endgame();
      return;
    } else {
      pointer.textContent = "Computer gets a point!";
      cScore++;
      updateScore();
      endgame();
      return;
    }
  };

  //executing inner functions
  gameStart();
  gameplay();
};

game();
