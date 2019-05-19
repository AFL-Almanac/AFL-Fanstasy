

function hidefunctions() {
      
        var y = document.getElementById("container");
        var b = document.getElementById("BackButton");
        var p = document.getElementById("PlayerSelectionPage");
        var t = document.getElementById("TrendsSelectionPage");
        var q = document.getElementById("QuizSelectionPage");
        q.style.display = "none";
        y.style.display = "none";
        b.style.display = "none";
        p.style.display = "none";
        t.style.display = "none";
         
}


window.onload = hidefunctions;



function myFunction() {
          var x = document.getElementById("Positions");
          var y = document.getElementById("container");
          var b = document.getElementById("BackButton");
          var c = document.getElementById("closeButton");
          if (x.style.display === "none") {
            x.style.display = "block";
            c.style.display = "block";
            y.style.display = "none";
            b.style.display = "none";
          } else {
            x.style.display = "none";
            c.style.display = "none";
            y.style.display = "block";
            b.style.display = "block";

          }
        }

    function viewTeam() {
      
      var p = document.getElementById("PlayerSelectionPage");
      var f = document.getElementById("FeatureSelection");

      if (p.style.display === "none") {
        p.style.display = "block";
        f.style.display = "none";
        
      } else {
        p.style.display = "none";
        f.style.display = "block";

      }
    }

     function viewTrends() {
      
      var t = document.getElementById("TrendsSelectionPage");
      var f = document.getElementById("FeatureSelection");

      if (t.style.display === "none") {
        t.style.display = "block";
        f.style.display = "none";
        
      } else {
        t.style.display = "none";
        f.style.display = "block";

      }
    }

    function viewQuiz() {
      
      var q = document.getElementById("QuizSelectionPage");
      var f = document.getElementById("FeatureSelection");

      if (q.style.display === "none") {
        q.style.display = "block";
        f.style.display = "none";

        if(questionsAnswered === 5){
            checkAnswers();
        }
        else {
            showQuestion();
        }
        
      } else {
        q.style.display = "none";
        f.style.display = "block";
        

      }
    }

    function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");


   let res = document.getElementById(data).innerHTML;
  let div = document.createElement('div');
  div.innerHTML = res;
  let selected = div.getElementsByClassName('img-profile');

  //ev.target.style.background="white";

  if (selected[0]!= null){
    ev.target.style.border="none";
    ev.target.style.boxShadow="0 8px 6px -6px green";
  }

  //document.getElementById(data).style.display="none";

    ev.target.appendChild(selected[0]);


}