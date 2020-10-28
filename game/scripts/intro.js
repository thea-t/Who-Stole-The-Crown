var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

window.onload = function () {
    //load background image
    var backgroundImage = new Image();
    backgroundImage.src = "art/main-background.png";

    //draw the image after it is loaded
    backgroundImage.onload = function () {
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
       
        //draw the text in the center after the image is drawn
        context.font = '20px serif';
        context.textAlign = "center";
        context.strokeStyle = "gray";
        context.strokeText("PRESS TO START", canvas.width / 2, canvas.height / 1.15);
    }

    //detect mouse click
    canvas.addEventListener('click', startGame, false);

}
function startGame() {

    canvas.removeEventListener('click', startGame, false);

    //load background image
    var backgroundImage = new Image();
    backgroundImage.src = "art/PAPYRUS11.jpg";

    //draw the image after it is loaded
    backgroundImage.onload = function () {
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        //draw the text in the center after the image is drawn
        context.font = '15px "Trebuchet MS", Helvetica, sans-serif';
        context.textAlign = "center";
        context.fillText("Hello, I'm the king.", canvas.width / 2, canvas.height / 3.3);
        context.fillText("I hired you because I have a mission for you.", canvas.width / 2, canvas.height / 3.3 + 25);
        context.fillText("Someone stole my crown yesterday while", canvas.width / 2, canvas.height / 3.3 + 50);
        context.fillText("I was sleeping. Your mission is to find the thief.", canvas.width / 2, canvas.height / 3.3 + 75);
        context.fillText("I've heard that you are one of the best detectives around.", canvas.width / 2, canvas.height / 3.3 + 100);


        //draw "press to continue" text
        context.font = '20px serif';
        context.textAlign = "center";
        context.strokeStyle = "gray";
        context.strokeText("PRESS TO CONTINUE", canvas.width / 2, canvas.height / 1.15);
    }


    //detect mouse click
    canvas.addEventListener('click', playGame, false);
}