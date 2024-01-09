const rock= document.getElementById("rock-element");
const paper= document.getElementById("paper-element");
const scissors= document.getElementById("scissors-element");
let computerText= document.querySelector("span");
let result = document.getElementById("result");
let computerChoice;



function computerChoiceFunc(){
   computerChoice =Math.floor(Math.random()*3)+1;
    if (computerChoice===1){
        computerText.innerHTML="Rock"
    }
    else if (computerChoice===2){
        computerText.innerHTML="Paper"
    }
    else{
        computerText.innerHTML="Scissors"
    }
}


function scissorsOption(){
    computerChoiceFunc();
    if (computerChoice===2) {
        result.innerHTML="YOU WIN!!!";
    }
    else if(computerChoice===1){
        result.innerHTML="YOU LOST    :(";
    }
    else{
        result.innerHTML="DRAW";
    }
   console.log("You chose scissors");
}

function rockOption(){
    computerChoiceFunc();
    if (computerChoice===3) {
        result.innerHTML="YOU WIN!!!";
    }
    else if(computerChoice===2){
        result.innerHTML="YOU LOST  :(";
    }
    else{
        result.innerHTML="DRAW";
    }
    console.log("You chose rock");
}


function paperOption(){
    computerChoiceFunc();
    if (computerChoice===1) {
        result.innerHTML="YOU WIN!!!";
    }
    else if(computerChoice===3){
        result.innerHTML="YOU LOST :(";
    }
    else{
        result.innerHTML="Draw";
    }
    console.log("You chose paper");
}


scissorsOption();