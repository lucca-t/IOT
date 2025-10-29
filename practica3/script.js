
function playMusic() {
    
    const music = document.getElementById("music");
    const musicBtn = document.getElementById("musicButton");
    music.volume = 1;

    if (music.paused) {
        music.play();
        musicBtn.textContent = "Pause";
    } else {
        music.pause();
        musicBtn.textContent = "Play";
    }
    //music.volume = 0.1;
    //music.play();
}



const musicBtn = document.getElementById("musicButton");

musicBtn.addEventListener("click", function (e) {
    playMusic();
});


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
function changeOld() {
    let img = document.getElementById("myImage");
    img.src = "../assets/old.png";
    document.body.style.backgroundImage = "url('../assets/norse.avif')";
}

function changeFortnite() {
    let img = document.getElementById("myImage");
    img.src = "../assets/kratosgriddy.gif";
    img.style.width = "500px";

    document.body.style.backgroundImage = "url('../assets/fortnitebackground.png')";
}

