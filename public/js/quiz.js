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

function getValue(str) {
    var answerMe = str;
    answers.push(answerMe);
    questionsAnswered++;
    var lengthy = Object.keys(questions).length;
    console.log(lengthy);
    if(questionsAnswered === lengthy){
        checkAnswers();
    }
    else {

        showQuestion();
    }

}

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

function checkAnswers() {
    var countedAnswers = 0;
        console.log("hello");
        var questionArraySize = questionArray.length;
        for( var counter = 0; counter <= questionArraySize; counter++){
            if(answers[counter] === questions[counter][3]){
                countedAnswers++;
            }
        }

    var contOne = document.getElementById("cContainer");
    contOne.parentNode.removeChild(contOne);
    var contTwo = document.getElementById("aContainer");
    contTwo.parentNode.removeChild(contTwo);
    two.innerHTML = countedAnswers;
    console.log(countedAnswers);
}

window.onload = function ()
    {
        var page = document.location.href;
        if(questionsAnswered === 5){
            checkAnswers();
        }
        else {
            showQuestion();
        }

    };




