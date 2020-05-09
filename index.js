
var drumList = ["wDrum", "aDrum", "sDrum", "dDrum", "jDrum", "kDrum", "lDrum"];

var wDrum = document.querySelector(".w");
var aDrum = document.querySelector(".a");
var sDrum = document.querySelector(".s");
var dDrum = document.querySelector(".d");
var jDrum = document.querySelector(".j");
var kDrum = document.querySelector(".k");
var lDrum = document.querySelector(".l");

// BACKGROUNDS -----------------------------------------------

wDrum.style.backgroundImage = "url('images/crash.png')";
aDrum.style.backgroundImage = "url('images/kick.png')";
sDrum.style.backgroundImage = "url('images/tom1.png')";
dDrum.style.backgroundImage = "url('images/tom2.png')";
jDrum.style.backgroundImage = "url('images/tom3.png')";
kDrum.style.backgroundImage = "url('images/tom4.png')";
lDrum.style.backgroundImage = "url('images/snare.png')";


// CLICK ---------------------------------------------------------

var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    });
}

// querySelector chooses always the first one.

// KEYS ---------------------------------------------------------

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {

    case "w":
      var wAudio = new Audio("sounds/crash.mp3");
      wAudio.play();
      break;

    case "a":
      var aAudio = new Audio("sounds/kick-bass.mp3");
      aAudio.play();
      break;

    case "s":
      var sAudio = new Audio("sounds/tom-1.mp3");
      sAudio.play();
      break;

    case "d":
      var dAudio = new Audio("sounds/tom-2.mp3");
      dAudio.play();
      break;

    case "j":
      var jAudio = new Audio("sounds/tom-3.mp3");
      jAudio.play();
      break;

    case "k":
      var kAudio = new Audio("sounds/tom-4.mp3");
      kAudio.play();
      break;

    case "l":
      var lAudio = new Audio("sounds/snare.mp3");
      lAudio.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
};


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
