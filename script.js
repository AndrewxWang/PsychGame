var lives = 5;
var count = 0;
var score = 0;
var questionsUsed = [];

function createPrompt() {
    document.getElementById("questionNum").innerHTML = "Question " + (count+1) + ":";
    document.getElementById("question").innerHTML = questionsList[count]["Question"];
    document.getElementById("A").innerHTML = "A. " + questionsList[count]["A"];
    document.getElementById("B").innerHTML = "B. " + questionsList[count]["B"];
    document.getElementById("C").innerHTML = "C. " + questionsList[count]["C"];
    document.getElementById("D").innerHTML = "D. " + questionsList[count]["D"];
}

function checkAns(letter) {
    if (letter == questionsList[count]["ANS"]) {
        document.getElementById("correctSFX").play();
        flashScreen("rgb(59, 208, 0)");
        count++;
        score++;
        changeScore(score);
        nextQuestion();
    } else {
        document.getElementById("background").style.animation = "shake 0.5s";
        document.getElementById("heart" + lives).style.visibility = "hidden";
        document.getElementById("incorrectSFX").play();
        if (lives > 1) {
            flashScreen("red");
            lives--;
            count++;
            nextQuestion();
        } else {
            lives--;
            document.getElementById("flash").style.display = "block";
            document.getElementById("flash").style.opacity = "0.8";
            document.getElementById("flash").style.backgroundColor = "red";
            displayGameEnd("gameOver");
            setTimeout(function() {
                document.getElementById("flash").style.opacity = "0";
                setTimeout(function(){
                    document.getElementById("flash").style.display = "none";
                }, 1500);    
            }, 100);
        }
        setTimeout(function(){
            document.getElementById("background").style.animation = "none";
        }, 300);
    }
    setTimeout(function(){
        if (count%10 == 0){
            displayUnit(count);
        }
    }, 550);
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

function loadSite() {
    if (!localStorage.highScore) {
        localStorage.highScore = 0;
    }

    if (!localStorage.clickLink) {
        localStorage.clickLink = 0;
    }
    document.getElementById("highscore").innerHTML = "High Score: " + localStorage.highScore;
    document.getElementById("currScore").innerHTML = "Score: " + score;

    displayUnit(count);
    createPrompt();
    scaleInHearts();

    setTimeout(function () {
        document.getElementById("prompt").style.transform = "translateY(-5.5vh)";
    }, 300);
}