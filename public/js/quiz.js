const questions = {

    1:["Money","Deal","Ronnie","Ronnie"],
    2:["Money","Deal","Ronnie","Ronnie"],
    3:["Money","Deal","Ronnie","Ronnie"],
    4:["Money","Deal","Ronnie","Ronnie"],
    5:["Money","Deal","Ronnie","Ronnie"],
    // 6:[1],
    // 7:[6],
    // 8:[6,7,12],
    // 9:[5],
    // 10:[],
    // 11:[8,10],
    // 12:[]
};
var Length = questions.length;



for( var item in questions) {

    list = questions[item];

    console.log(questions[item]);


    for (var i = 0; i < list.length; i++) {
        document.getElementById("opOne").innerHTML = list[0];
        document.getElementById("opTwo").innerHTML = list[1];
        document.getElementById("opThree").innerHTML = list[2];

    }

}

function answerCheck(p) {
    if (p === "a") {
        console.log("hello");
        var answer = document.getElementById("opOne").innerHTML;
        console.log(answer);
    }
}