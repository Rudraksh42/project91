

playername1 = localStorage.getItem("playername1");
playername2 = localStorage.getItem("playername2");
player1_score = 0;
player2_score = 0;

document.getElementById("player1_name_score").innerHTML=playername1 + " : ";
document.getElementById("player2_name_score").innerHTML= playername2 + " : ";
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "Question turn : " + playername1;
document.getElementById("player_answer").innerHTML= "Answer turn : " + playername2;

function send()
{
    get_Num1 = document.getElementById("Num1").value;
    get_Num2 = document.getElementById("Num2").value;
    Q = get_Num1 + " X " + get_Num2;
    Answer = parseInt(Num1) * parseInt(Num1);

    Question = "<h4 style='margin-left : 5px;' id='Num1_display'> Question : " + Q + "</h4>";
    Input_box = "<br> Answer : <input type='ibox' id='Input_check'> </input>";
    check_button = "<br><br> <button style='margin-left : -50px;' class='btn btn-info' onClick='check()'> check </button> <br> <br>";
    row = Question + Input_box + check_button;
    document.getElementById("Output").innerHTML=row;
    document.getElementById("Num1").value = "";
    document.getElementById("Num2").value = "";
}
