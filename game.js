var buttonColors = ["green", "red", "yellow", "blue"];

var gamePattern = [];
var userInput = [];

var level = 0;

// Starting the game
$("h1").click(function() {
  if (level === 0) {
    addRandomColor();
  }
});


// Generating new sequence and add it to gamePattern[]
function addRandomColor() {

  var randomColor = buttonColors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomColor);

  level++;
  $("#level-title").html("Level " + level)
  userInput = [];

  setTimeout(function() {
    playAnimationAndSound(randomColor);
  }, 800);
};



// function playSequence(i) {
//   setTimeout(function() {
//     playAnimationAndSound(gamePattern[i]);
// }, 1000);
// }


// Check what button is being clicked and add it to the userInput[]
$(".btn").click(function() {

  userInput.push(this.id);

  playAnimationAndSound(this.id);

  // Check answer
  for (var i = 0; i < userInput.length; i++) {

    if (gamePattern[i] != userInput[i]) {
      gameOver();

    } else {
      if (gamePattern.length === userInput.length) {
        addRandomColor();
      }
    }
  };
});


// Pressed animations and sound effects
function playAnimationAndSound(color) {

  $("#" + color).addClass("pressed");
  setTimeout(function() {
    $("#" + color).removeClass("pressed")
  }, 100);

  var soundEffect = new Audio("sounds/" + color + ".mp3");
  soundEffect.play();

};


// Game over animations and sound effects
function gameOver() {

  var gameOverSound = new Audio("sounds/wrong.mp3");
  gameOverSound.play();

  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over")
  }, 100);

  $("#level-title").html("Click here to restart")
  level = 0;
  userInput = [];
  gamePattern = [];
};
