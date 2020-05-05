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

// SOUNDS ---------------------------------------------------------

function wDrumSound() {
  var wAudio = new Audio("sounds/crash.mp3");
  wAudio.play();
}
wDrum.addEventListener("click", wDrumSound);

function aDrumSound() {
  var aAudio = new Audio("sounds/kick-bass.mp3");
  aAudio.play();
}
aDrum.addEventListener("click", aDrumSound);







var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i=0; i<=numberOfButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {
this.style.color = "white";
}); }
// querySelector chooses always the first one.







//function name() {
  //var wAudio = new Audio("sounds/crash.mp3");
//  wAudio.play();
//}

//var item = [".w", ".a", ".s", ".d", ".j", ".k", ".l"];
//if (item = .w) {
  //document.querySelector(item).addEventListener("click", function name());
//} else {
//  document.querySelector(item).addEventListener("click", function name());
//}



//document.querySelector(".a").addEventListener("click", function () {
  //var aAudio = new Audio("sounds/kick-bass.mp3");
  //aAudio.play();
//});
//class="w drum">w</button>
//<button class="a drum">a</button>
//<button class="s drum">s</button>
//<button class="d drum">d</button>
//<button class="j drum">j</button>
//<button class="k drum">k</button>
//<button class="l drum"
