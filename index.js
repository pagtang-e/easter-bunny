
let lastScoreLabel = document.getElementById("lastScore");
let bestScoreLabel = document.getElementById("bestScore");
let message = localStorage.getItem("message");
let messageLabel = document.getElementById("messageLabel");

if(message != null){

    messageLabel.innerText = message;

}
else{
    messageLabel.innerText = "EGG CATCHER";
}

if(localStorage.getItem("lastScore")){

lastScoreLabel.innerText = localStorage.getItem("lastScore");
bestScoreLabel.innerText = localStorage.getItem("bestScore");

}