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
    const playerHand = document.querySelector(".player-hand img");
    const computerHand = document.querySelector(".computer-hand img");
    const bothHands = document.querySelectorAll(".hands img");

    bothHands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Generating random number from 0-2
        const computerNumber = Math.floor(
          Math.random() * computerOptions.length
        );
        const computerChoice = computerOptions[computerNumber]; //Applying random number to options array
        console.log(computerChoice);
        setTimeout(() => {
          scoreCompare(this.textContent, computerChoice);

          //Images change

          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 1300);

        //Animation
        playerHand.style.animation = "playerShake 1.5s ease";
        computerHand.style.animation = "computerShake 1.5s ease";
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
      pointer.textContent = "Player wins!";
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

  //Ending the game and disabling buttons
  const endgame = () => {
    const disableBtn = document.querySelector(".options");
    const playAgain = document.querySelector(".play-again button");

    function playAgainButton() {
      playAgain.addEventListener("click", function () {
        window.location.reload();
      });
    }

    const restartGame = () => {
      playAgain.style.visibility = "visible";
      playAgain.style.animation = "popInOut 1s infinite running";
    };

    if (pScore === 5) {
      pointer.textContent = "Congratz! You win the game!";
      disableBtn.classList.add("disableButtons");
      restartGame();
      playAgainButton();
    } else if (cScore === 5) {
      pointer.textContent = "Computer wins the game :(";
      disableBtn.classList.add("disableButtons");
      restartGame();
      playAgainButton();
    }
  };

  gameStart();
  gameplay();
};

game();
