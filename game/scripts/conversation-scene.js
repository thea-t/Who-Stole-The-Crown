//load images
var buttonImage = new Image();
buttonImage.src = "art/Button.png";

var backgroundImage = new Image();
backgroundImage.src = "art/FIND_NEW3.jpg";



function drawConversationScene() {

        //draw the images in different positions
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    context.drawImage(buttonImage, 100, 300, buttonImage.width * 2, buttonImage.height * 1.8);
    context.drawImage(buttonImage, 100, 400, buttonImage.width * 2, buttonImage.height * 1.8);
    context.drawImage(buttonImage, 520, 300, buttonImage.width * 2, buttonImage.height * 1.8);
    context.drawImage(buttonImage, 520, 400, buttonImage.width * 2, buttonImage.height * 1.8);


    //load npc images from their image source
    var npcPortrait = new Image();
    npcPortrait.src = clickedNpc.npcImageSource;

    //draw the npc images after they are loaded
    npcPortrait.onload = function () {
        context.drawImage(npcPortrait, 150, 100);

        //draw text
        context.font = '30px "Trebuchet MS", Helvetica, sans-serif';
        context.fillText(clickedNpc.npcName, canvas.width / 2.5, canvas.height / 4.5 - 30);

        context.font = '15px "Trebuchet MS", Helvetica, sans-serif';
        context.fillText("Goodbye", 540, 445);

      
    }


}

function checkButtonClicks() {

    // get the hotizontal and the vertical coordinate
    var x = event.clientX;
    var y = event.clientY;

    // make the canvas start from (0,0) in order to get accurate coordinates of the npc's positions
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;



    //top-left button
    if (x > 100 && x < 100 + buttonImage.width * 2) {
        if (y > 300 && y < 300 + buttonImage.height * 1.8) {
            if (clickedNpc.npcName != "King") {
                askQuestion(currentQuestion1);
            }
            else {
                checkThief();
            }
        }
        //bot-left
        else if (y > 400 && y < 400 + buttonImage.height * 1.8) {

            if (clickedNpc.npcName != "King") {
                askQuestion(currentQuestion2);
            }
            else {
                alert("Then get back to work!");
            }
        }
    }
    //top-right
    else if (x > 520 && x < 520 + buttonImage.width * 2) {
        if (y > 300 && y < 300 + buttonImage.height * 1.8) {
            if (clickedNpc.npcName != "King") {
                askQuestion(currentQuestion3);
            }
            else {
                defeat();
            }
        }
        //bot-right
        else if (y > 400 && y < 400 + buttonImage.height * 1.8) {
            loadScene(activeScene);
            canvas.removeEventListener('click', checkButtonClicks, false);

        }
    }
}

function drawIntro(introNumber) {

    //draw the text in custom style and position after the image is drawn
    context.font = '15px "Trebuchet MS", Helvetica, sans-serif';
    context.textAlign = "left";
    drawDialogueText(intros[introNumber]);
}

 //draws the stored questions in custom style and position after the image is drawn
function drawQuestions(question1, question2, question3) {

    currentQuestion1 = question1;
    currentQuestion2 = question2;
    currentQuestion3 = question3;

    context.font = '15px "Trebuchet MS", Helvetica, sans-serif';
    context.fillText(questionsAndAnswers[question1][0], 120, 345);
    context.fillText(questionsAndAnswers[question2][0], 120, 445);
    context.fillText(questionsAndAnswers[question3][0], 540, 345);

}



