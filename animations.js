//animations
function scaleUp(myId) {
    document.getElementById(myId).style.fontSize = "5vh";
    setTimeout(function () {
        document.getElementById(myId).style.fontSize = "3vh";
    }, 250);
}

function flashScreen(color) {
    document.getElementById("flash").style.display = "block";
    document.getElementById("flash").style.opacity = "0.8";
    document.getElementById("flash").style.backgroundColor = color;
    setTimeout(function () {
        document.getElementById("flash").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("flash").style.backgroundColor = "none";
            document.getElementById("flash").style.display = "none";
        }, 400);
    }, 150);
}

function nextQuestion(){
    document.getElementById("prompt").style.transform = "scale(0.75)";
    setTimeout(function () {
        document.getElementById("prompt").style.transform = "scale(1)";
        randomize();
        createPrompt();
    }, 150);
}

function displayGameOver(){
    setTimeout(function () {
        document.getElementById("prompt").style.opacity = "0";
        document.getElementById("prompt").style.visibility = "hidden";
        setTimeout(function () {
            document.getElementById("gameOverSFX").play();
            document.getElementById("gameOver").style.visibility = "visible";
            document.getElementById("gameOver").style.transform = "scale(1)";
        }, 1000);
    }, 1000);
}