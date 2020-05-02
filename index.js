
//var numberOfButtons = document.querySelectorAll(".drum").length;
//for (var i=0; i<=numberOfButtons; i++) {



//document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();
//}); }
// querySelector chooses always the first one.

document.querySelector(".a").style.backgroundImage = "url('images/kick.png')";


document.querySelector(".drum").addEventListener("click", function () {
  var wAudio = new Audio("sounds/crash.mp3");
  wAudio.play();
});

document.querySelector(".a").addEventListener("click", function () {
  var aAudio = new Audio("sounds/kick-bass.mp3");
  aAudio.play();
});
//class="w drum">w</button>
//<button class="a drum">a</button>
//<button class="s drum">s</button>
//<button class="d drum">d</button>
//<button class="j drum">j</button>
//<button class="k drum">k</button>
//<button class="l drum"
