let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};


const resetButton = document.querySelector(".js-reset-button");

function resetResult() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScorElement();
}
resetButton.addEventListener("click", () => {
  YesOrNO()
});

const textYesOrNO = document.querySelector('.js-yes-no');
//текст появ при нажатии reset  если ес то удал. иначе нет
function YesOrNO() {
  let ContentYesOrNO = `Вы уверены что хотите сбрость счет? 
  <button class="js-Yes-button">
    Yes
  </button>
  <button class="js-No-button">
    No
  </button>`
  textYesOrNO.innerHTML = ContentYesOrNO;

  const Yes = document.querySelector('.js-Yes-button')

  Yes.addEventListener('click', () => {
    resetResult()
    textYesOrNO.innerHTML = '';
  })
  
  const No = document.querySelector('.js-No-button')

  No.addEventListener('click', () => {
    textYesOrNO.innerHTML = '';
  })
}


//для показа результата
updateScorElement();

/*
// (score === null)
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

//---------****------ Автоматик Игра---------******

const autoButton = document.querySelector(".js-autoplay-button");

autoButton.addEventListener("click", () => {
  autoPlay();
});

document.body.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "a") {
    autoPlay();
  }
});

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    autoButton.textContent = "Stop plaing";
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    autoButton.textContent = "Auto Play";
    isAutoPlaying = false;
  }
}

document.querySelector(".js-rock-button").addEventListener("click", () => {
  playGame("rock");
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
  playGame("paper");
});

document.querySelector(".js-scissors-button").addEventListener("click", () => {
  playGame("scissors");
});

document.body.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
  } else if (event.key === "Backspace") {
    YesOrNO()
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  //cначало проверяем ход игрока потом компа
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  //показываем результат
  document.querySelector(".js-result").innerHTML = result;

  //показать ходы чела и компа
  document.querySelector(".js-moves").innerHTML = `You
<img class="move-icon" src="./image/${playerMove}-emoji.png" alt="">
<img class="move-icon" src="./image/${computerMove}-emoji.png"  alt="">
computer `;

  localStorage.setItem("score", JSON.stringify(score));

  //чтобы при каждом клике обновлялся результат очков
  updateScorElement();
}

//чтобы при каждом клике обновлялся результат очков
function updateScorElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

//ход компа в перемнной computerMove
function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
