const questions = {

    1: ["Ronnie", "Deal", "Ronnie", "Ronnie"],
    2: ["Nolan", "Deal", "Ronnie", "Ronnie"],
    3: ["Jekyl", "Deal", "Ronnie", "Ronnie"],
    4: ["Hyde", "Deal", "Ronnie", "Ronnie"],
    5: ["Ronan", "Deal", "Ronnie", "Ronnie"],

};

window.onload = function ()
    {


    //loop through questions to display in quiz page
        for (var item in questions)
        {

            list = questions[item];

            console.log(questions[item]);


            for (var i = 0; i < list.length; i++) {
                document.getElementById("opOne").innerHTML = list[0];
                document.getElementById("opTwo").innerHTML = list[1];
                document.getElementById("opThree").innerHTML = list[2];
                answerCheck()

            }

        }




    };

function answerCheck(p)
    {

        console.log("working forloop");

        for (var questionAnswered = 0; questionAnswered <= questions.length; questionAnswered++) {

            var one = document.getElementById("opOne").innerHTML = list[0];
            var two = document.getElementById("opTwo").innerHTML = list[1];
            var three = document.getElementById("opThree").innerHTML = list[2];
            console.log(one);
            for (var item in questions)
            {

                list = questions[item];
                if (p === "a") {
                    var answer = one;
                    var correct = list[3];

                    if (answer === correct) {
                        console.log("correct");
                    }
                }


            }

        }


    }