function addUser(){
    var Player1Name=document.getElementById("playername1input").value;
    var Player2Name=document.getElementById("playername2input").value;
    localStorage.setItem("player1name",Player1Name);
    localStorage.setItem("player2name",Player2Name);
    window.location="game_page.html";
}

