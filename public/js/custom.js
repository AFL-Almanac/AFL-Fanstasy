/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
$(function() {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});
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