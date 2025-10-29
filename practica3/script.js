// Función para reproducir el sonido de fart
function playFart() {
  const audio = new Audio("../assets/fart.mp3");
  audio.volume = 0.1;
  audio.play();
}
function changeDefault() {
  let img = document.getElementById("myImage");
  img.src = "../assets/default.png";

  document.body.style.backgroundImage = "url('../assets/title.jpg')";
}
function changeChaos() {
  let img = document.getElementById("myImage");
  img.src = "../assets/kratoschaos.png";
  img.style.width = "500px";

  document.body.style.backgroundImage = "url('../assets/background1.jpg')";
}

function changeAthena() {
  let img = document.getElementById("myImage");
  img.src = "../assets/kratosathena.png";
  img.style.width = "500px";
    
  document.body.style.backgroundImage = "url('../assets/chaosbackground.jpg')";
}
function changeAttack() {
  let img = document.getElementById("myImage");
  img.src = "../assets/attack.png";
  const music = document.getElementById("music");
  music.volume = 0.1;

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function changeFortnite() {
  let img = document.getElementById("myImage");
  img.src = "../assets/kratosgriddy.gif";
  img.style.width = "500px";

  document.body.style.backgroundImage = "url('../assets/fortnitebackground.png')";
}

const fartBtn = document.getElementById("fartButton");

fartBtn.addEventListener("click", function (e) {
  playFart();
});
