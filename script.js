let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');
let start = document.getElementById('start-button');
let closedDoorPath = "assets/door.png";
let jumpDoorPath = "assets/jumpscare-image.png";
let beachDoorPath = "assets/beach-image.png";
let spaceDoorPath = "assets/space-image.png";
let openDoor1;
let openDoor2;
let openDoor3;
let currentPlaying = true;
let numOfDoors = 3;
let score = 0;
let highScore = 0;
let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;

const isClicked = (door) => {
    if (door.src === closedDoorPath){
        return false;
    }else {
        return true;
    }
}

const playDoor = (door) => {
    numOfDoors--;
    if (numOfDoors === 0) {
        gameOver('win');
    }else if(isBot(door)) {
        gameOver();
    }
}

const isBot = (door) => {
    return door.src.endsWith(jumpDoorPath);
};

const randomNumberGenerator = () => {
    randomNumber = Math.floor(Math.random() * numOfDoors);
    if (randomNumber === 0) {
        openDoor1 = jumpDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }

    if (randomNumber === 1) {
        openDoor1 = beachDoorPath;
        openDoor2 = jumpDoorPath;
        openDoor3 = spaceDoorPath;
    }

    if (randomNumber === 2) {
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = jumpDoorPath;
    }
}

door1.onclick = () => {
    if (currentPlaying && isClicked(door1)) {
        door1.src = openDoor1;
        playDoor(door1);
    }
}
door2.onclick = () => {
    if (currentPlaying && isClicked(door2)) {
        door2.src = openDoor2;
        playDoor(door2);
    }
}
door3.onclick = () => {
    if (currentPlaying && isClicked(door3)) {
        door3.src = openDoor3;
        playDoor(door3);
    }
}

start.onclick = () => {
    startRound();
  }

const startRound = () => {
    // Reset all the doors to be closed
    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    numOfDoors = 3;
    currentPlaying = true;
    start.innerHTML = 'Good luck!';
    randomNumberGenerator();
  }


const gameOver = (status) => {
    currentPlaying = false;  // Disable further game play
    if (status === 'win') {
        start.innerHTML = 'You win! Play again?';
        getYourScore();
    } else{
        start.innerHTML = 'Game Over! Try again';
        score = 0;
        currentStreak.innerHTML = score;
    }
}

const getYourScore = () => {
    score++;
    currentStreak.innerHTML = score;
    if (score > highScore) {
        highScore = score;
        bestStreak.innerHTML = highScore;
    }
}

  startRound();