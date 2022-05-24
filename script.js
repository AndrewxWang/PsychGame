var lives = 5;
var count = 1;
var score = 0;
var randomNum;
var questionsUsed = [];

function createPrompt() {
    document.getElementById("questionNum").innerHTML = "Question " + count + ":";
    document.getElementById("question").innerHTML = questionsList[randomNum]["Question"];
    document.getElementById("A").innerHTML = "A. " + questionsList[randomNum]["A"];
    document.getElementById("B").innerHTML = "B. " + questionsList[randomNum]["B"];
    document.getElementById("C").innerHTML = "C. " + questionsList[randomNum]["C"];
    document.getElementById("D").innerHTML = "D. " + questionsList[randomNum]["D"];
}

function checkAns(letter) {
    if (letter == questionsList[randomNum]["ANS"]) {
        flashScreen("green");
        count++;
        score++;
        randomize();
        changeScore(score);
        createPrompt(questionsList);
    } else {
        if (lives > 1){
            flashScreen("red");
            document.getElementById("heart" + lives).style.visibility = "hidden";
            count++;
            lives--;
            randomize();
            createPrompt(questionsList);
        } else {
            document.getElementById("heart" + lives).style.visibility = "hidden";
            lives--;
            alert("GAME OVER");
        }
    }
}

function changeScore(score) {
    scaleUp("currScore");
    document.getElementById("currScore").innerHTML = "Score: " + score;
    if (score > Number(localStorage.highScore)) {
        localStorage.highScore = score;
        scaleUp("highscore");
        document.getElementById("highscore").innerHTML = "High Score: " + localStorage.highScore;
    }
}

function randomize() {
    randomNum = Math.floor(Math.random() * questionsList.length);
    if (questionsUsed.includes(randomNum)){
        var sentinel = 0;
        while (questionsUsed.includes(randomNum)){
            randomNum = Math.floor(Math.random() * questionsList.length);
            sentinel++;
            if (sentinel == 999){
                alert("DONE");
                break;
            }
        }
    }
    questionsUsed.push(randomNum);
}


//animation
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

function loadSite(){
    if (!localStorage.highScore) {
        localStorage.highScore = 0;
    }

    if (!localStorage.clickLink) {
        localStorage.clickLink = 0;
    }
    document.getElementById("highscore").innerHTML = "High Score: " + localStorage.highScore;
    document.getElementById("currScore").innerHTML = "Score: " + score;
    
    randomize();
    createPrompt();
    
    setTimeout(function(){
        document.getElementById("prompt").style.transform = "translateY(-5.5vh)";
    },300);
}
