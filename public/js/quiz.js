const questionArray = {
    0: ["Highest scoring goalie?"],
    1: ["jerrie or jerry?"],
    2: ["How are you still alive?"],
    3: ["Who is Dumbledore?"],
    4: ["What is Gamora?"],
};
const questions = {
    0: ["Ronnie", "Deal", "Ronnie", "Ronnie"],
    1: ["Nolan", "Deal", "Ronnie", "Ronnie"],
    2: ["Jekyl", "Deal", "Ronnie", "Ronnie"],
    3: ["Hyde", "Deal", "Ronnie", "Ronnie"],
    4: ["Ronan", "Deal", "Ronnie", "Ronnie"],
};
var three;
var two;
var one;
var i = 0;
var itemOne = 0;
var itemTwo = 1;
var itemThree = 2;
var answers = [];
var questionsAnswered = 0;

function showQuestion()
{
        document.getElementById("buttonOne").value = questions[i][itemOne];
        document.getElementById("buttonTwo").value = questions[i][itemTwo];
        document.getElementById("buttonThree").value = questions[i][itemThree];
        document.getElementById("questionFor").innerHTML = questionArray[i];
        one = document.getElementById("opOne").innerHTML = questions[i][itemOne];
        two = document.getElementById("opTwo").innerHTML = questions[i][itemTwo];
        three = document.getElementById("opThree").innerHTML = questions[i][itemThree];
        i++;
}
window.onload = function ()
    {
            showQuestion();
    };

function getValue(str) {
    answers.push(str);
    questionsAnswered ++;
    console.log(questionsAnswered);
    var lengthy = Object.keys(questions).length;
    console.log(lengthy);
    if(questionsAnswered === questions.length){
        document.getElementById("counting").innerText = "No more questions";
        checkAnswers();
    }
    else {
        showQuestion();
    }

}
function checkAnswers() {
    var countedAnswers = 0;
    for( var counter = 0; counter <= questionArray.length; counter++){
        if(answers[counter] === questions[counter][3]){
            countedAnswers++;
        }
    }
}

