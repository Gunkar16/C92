var player1_name=localStorage.getItem("player1name")
var player2_name=localStorage.getItem("player2name")

var player1score=0;
var player2score=0;

document.getElementById("player1name").innerHTML=player1_name+": ";
document.getElementById("player2name").innerHTML=player2_name+": ";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name;
document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;

function send(){
    var getword = document.getElementById("word").value;
    console.log(getword);
    word = getword.toLowerCase();
    console.log(word);

    var charat1 = word.charAt(1);
    var length_div2=Math.floor(word.length/2)
    var charat2 = word.charAt(length_div2)
    var word_length = word.length-1;
    var charat3 = word.charAt(word_length)

    var removecharat1 = word.replace(charat1,"_");
    console.log(removecharat1);
    var removecharat2 = removecharat1.replace(charat2,"_");
    console.log(removecharat2);
    var removecharat3 = removecharat2.replace(charat3,"_");
    console.log(removecharat3);

    var question_word = "<h4 id='word_display'>q: "+ removecharat3 + "</h4>";
    var input_box = "<br> answer: <input type='text' id='input_check_box'>";
    var check_button = "<br> <br> <button class='btn btn-danger' onclick='check()'>check</button>"
    var row = question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").innerhtml="";
}
var answer_turn="player2";
var question_turn="player1"
function check(){
    var getAnswer = document.getElementById("input_check_box").value;
    Answer = getAnswer.toLowerCase();
    console.log(getAnswer);
    console.log(Answer);
    if (Answer==word){
        if(answer_turn=="player1"){
            player1score = player1score + 1 ;
            document.getElementById("player1score").innerHTML=player1score;
            console.log(player1score);
            console.log("answer turn is "+answer_turn);
            console.log("question turn is "+question_turn);
        }
        else{
           player2score = player2score + 1 ;
           document.getElementById("player2score").innerHTML=player2score;
           console.log(player2score);
           console.log("answer turn is "+answer_turn);
           console.log("question turn is "+question_turn);
        }
    }

    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn: "+player2_name;
        console.log("answer turn is "+answer_turn);
        console.log("question turn is "+question_turn);
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn: " + player1_name;
        console.log("answer turn is "+answer_turn);
        console.log("question turn is " +question_turn);
    }
    if(answer_turn=="player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name;
        console.log("answer turn is "+answer_turn);
        console.log("question turn is "+question_turn);
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML="Answer Turn: "+player1_name;
        console.log("answer turn is "+answer_turn);
        console.log("question turn is "+question_turn);
    }
    document.getElementById("output").innerText="";
}