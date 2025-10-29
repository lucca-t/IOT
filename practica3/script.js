// Función para reproducir el sonido de fart
function playFart() {
    const audio = new Audio('../assets/fart.mp3');
    audio.volume = .1;
    audio.play();
}

const fartBtn = document.getElementById("fartButton");

fartBtn.addEventListener("click", function(e) {
    playFart();
});