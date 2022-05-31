//animations

function scaleInHearts() {
    for (let i = 1; i <= lives; i++) {
        setTimeout(() => {
            document.getElementById("heart" + i).style.transform = "scale(1)";
        }, 1000);
    }
}
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
    }, 100);
}

function displayUnit(count) {
    if (count > 0){
        document.getElementById("nextUnitSFX").play();
    }
    
    if (count >= questionsList.length) {
        document.getElementById("unitText").innerHTML = "DONE!";
    } else {
        document.getElementById("unitText").innerHTML = "Unit " + ((count / 8) + 1) + ": <br>" + unitList[count / 8];
    }
    document.getElementById("flash").style.display = "block";
    document.getElementById("flash").style.opacity = "1";
    document.getElementById("flash").style.backgroundColor = "black";
    setTimeout(function () {
        document.getElementById("flash").style.display = "none";
        document.getElementById("flash").style.opacity = "0";
        document.getElementById("flash").style.backgroundColor = "none";
        document.getElementById("unitText").innerHTML = "";

        if (count >= questionsList.length) {
            displayGameEnd("gameWin");
        } else {
            createPrompt();
        }
    }, 2000);
}

function nextQuestion() {
    document.getElementById("prompt").style.transform = "scale(0.2)";
    setTimeout(function () {
        document.getElementById("prompt").style.transform = "translateY(-5.5vh) scale(1)";
        createPrompt();
    }, 150);
}

function displayGameEnd(determine) {
    if (determine == "gameWin") {
        document.getElementById("gameEnd").innerHTML = "YOU WON!";
    } else {
        document.getElementById("gameEnd").innerHTML = "GAME OVER...";
    }
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

//game end (lost)
function endFlash() {
    document.getElementById("flash").style.display = "block";
    document.getElementById("flash").style.opacity = "0.8";
    document.getElementById("flash").style.backgroundColor = "red";
}