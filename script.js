var lives = 5;
var count = 0;
var score = 0;
var brainUsed = false;

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
    } else {
        document.getElementById("background").style.animation = "shake 0.5s";
        document.getElementById("heart" + lives).style.visibility = "hidden";
        document.getElementById("incorrectSFX").play();
        if (lives > 1) {
            flashScreen("red");
            lives--;
            count++;
        } else {
            lives--;
            endFlash();
            displayGameEnd("gameOver");
            setTimeout(function() {
                document.getElementById("flash").style.opacity = "0";
                setTimeout(function(){
                    document.getElementById("flash").style.display = "none";
                }, 1500);    
            }, 100);
        }
    }
    setTimeout(function(){
        document.getElementById("background").style.animation = "none";  
    }, 300);

    checkUnit();
}

function skipQuestion(){
    document.getElementById("skip").style.visibility = "hidden";
    count++;
    checkUnit();
}

function checkUnit(){
    setTimeout(function(){
        if (count%8 == 0){
            displayUnit(count);
            unitPerks();
        } else if (lives > 0){
            nextQuestion();
            if (lives == 1 && !brainUsed){
                getBrain();
            }
        }
    }, 505);
}

function unitPerks(){
    document.getElementById("skip").style.visibility = "visible";
    if (lives < 5){
        lives++;
        document.getElementById("brain").style.transform = "translate(calc(50vw - 50%)) scale(0.1)";
        document.getElementById("brain").style.display = "none";
        document.getElementById("heart" + lives).style.visibility = "visible";
        scaleInHearts();
    }
    if (brainUsed){
        brainUsed = false;
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

function getInstructions(){
    setTimeout(function(){
        document.getElementById("myInventory").style.display = "block";        
        setTimeout(function(){
            document.getElementById("myInventory").style.opacity = "1";
        }, 200);
    }, 200);
}

function loadSite() {
    document.getElementById("title").style.fontSize = "5vh";
    document.getElementById("siteButtons").style.display = "none";
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