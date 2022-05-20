var count = 1;
var unitList = [researchQuestions, socialPsychQuestions];
var unitQuestions;
var randomNum;

function createPrompt(unitQuestions) {
    document.getElementById("questionNum").innerHTML = "Question " + count + ":";
    document.getElementById("question").innerHTML = unitQuestions[randomNum]["Question"];
    document.getElementById("A").innerHTML = "A. " + unitQuestions[randomNum]["A"];
    document.getElementById("B").innerHTML = "B. " + unitQuestions[randomNum]["B"];
    document.getElementById("C").innerHTML = "C. " + unitQuestions[randomNum]["C"];
    document.getElementById("D").innerHTML = "D. " + unitQuestions[randomNum]["D"];
}

function checkAns(letter) {
    if (letter == unitQuestions[randomNum]["ANS"]) {
        console.log("correct");
        count++;
        randomize();
        createPrompt(unitQuestions);
    } else {
        console.log("wrong");
    }
}

function randomize() {
    unitQuestions = unitList[Math.floor(Math.random() * unitList.length)];
    randomNum = Math.floor(Math.random() * unitQuestions.length);
}

randomize();
createPrompt(researchQuestions);