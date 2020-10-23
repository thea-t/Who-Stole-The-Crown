var intros = [
    "intro0",
    "Intro1",
    "into2",
    "intro3",
    "Intro4",
    "into5",
    "intro6",
    "Intro7",
    "into8",
    "intro9",
    "Intro10",
    "into11",
    "into12",
    "intro13",
    "Intro14",
    "into15",
    "intro16"
];
var questionsAndAnswers = [
    ["q1", "a1"],
    ["q2", "a2"],
    ["q3", "a3"],
    ["q4", "a4"],
    ["q5", "a5"],
    ["q6", "a6"],
    ["q7", "a7"],
    ["q8", "a8"],
    ["q9", "a9"],
    ["q10", "a10"]
];

var randomNumber = new Array();

for (var i = 0; i < 48; i++) {
    randomNumber[i] = Math.floor(Math.random() * questionsAndAnswers.length);
}

var currentNpc;
var currentQuestion1;
var currentQuestion2;
var currentQuestion3;

//load button image
var buttonImage = new Image();
buttonImage.src = "art/Button.png";

//load background image
var backgroundImage = new Image();
backgroundImage.src = "art/FIND_NEW3.jpg";

function drawIntro(introNumber) {

    //draw the text in a custom position after the image is drawn
    context.font = '15px "Trebuchet MS", Helvetica, sans-serif';
    context.textAlign = "left";
    drawDialogueText(intros[introNumber]);
}

function drawQuestions(question1, question2, question3) {

    currentQuestion1 = question1;
    currentQuestion2 = question2;
    currentQuestion3 = question3;

    context.font = '15px "Trebuchet MS", Helvetica, sans-serif';
    context.fillText(questionsAndAnswers[question1][0], 120, 330);
    context.fillText(questionsAndAnswers[question2][0], 120, 430);
    context.fillText(questionsAndAnswers[question3][0], 540, 330);

}

function startConversation(npcToStartConversationWith) {
    currentNpc = npcToStartConversationWith;

    canvas.removeEventListener('click', checkMouseClick, false);
    //detect mouse click
    canvas.addEventListener('click', checkButtonClicks, false);

    drawConversationScene();
}

function drawConversationScene() {

    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    //draw the image after it is loaded
    context.drawImage(buttonImage, 100, 300, buttonImage.width * 2, buttonImage.height * 1.8);
    context.drawImage(buttonImage, 100, 400, buttonImage.width * 2, buttonImage.height * 1.8);
    context.drawImage(buttonImage, 520, 300, buttonImage.width * 2, buttonImage.height * 1.8);
    context.drawImage(buttonImage, 520, 400, buttonImage.width * 2, buttonImage.height * 1.8);


    //load npc images from their image source
    var npcImage = new Image();
    npcImage.src = currentNpc.npcImageSource;

    //draw the npc images after they are loaded
    npcImage.onload = function () {
        context.drawImage(npcImage, 150, 100);

        //draw text on top of the buttons
        context.font = '15px "Trebuchet MS", Helvetica, sans-serif';
        context.fillText("Goodbye", 540, 430);
        context.font = '30px "Trebuchet MS", Helvetica, sans-serif';
        context.fillText(currentNpc.npcName, canvas.width / 2.5, canvas.height / 4.5-30);
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
            if (currentNpc.npcName != "King") {
                drawConversationScene();
                context.font = '15px "Trebuchet MS", Helvetica, sans-serif';

                var answerText;

                if (thief.npcIsPirate == true) {
                    answerText = questionsAndAnswers[currentQuestion1][1] + "Yes, it was a pirate!"
                }
                else {
                    answerText = questionsAndAnswers[currentQuestion1][1];
                }

                drawDialogueText(answerText);
                drawQuestions(currentQuestion1, currentQuestion2, currentQuestion3);
            }
            else {
                checkThief();
            }
        }
        //bot-left
        else if (y > 400 && y < 400 + buttonImage.height * 1.8) {

            if (currentNpc.npcName != "King") {
                drawConversationScene();
                context.font = '15px "Trebuchet MS", Helvetica, sans-serif';
                drawDialogueText(questionsAndAnswers[currentQuestion2][1]);
                drawQuestions(currentQuestion1, currentQuestion2, currentQuestion3);
            }
            else {
                alert("Then get back to work!");
            }
        }
    }
    //top-right
    else if (x > 520 && x < 520 + buttonImage.width * 2) {
        if (y > 300 && y < 300 + buttonImage.height * 1.8) {
            if (currentNpc.npcName != "King") {
                drawConversationScene();
                context.font = '15px "Trebuchet MS", Helvetica, sans-serif';
                drawDialogueText(questionsAndAnswers[currentQuestion3][1]);
                drawQuestions(currentQuestion1, currentQuestion2, currentQuestion3);
            }
            else {
                alert("You lost!");
            }
        }
        //bot-right
        else if (y > 400 && y < 400 + buttonImage.height * 1.8) {
            loadScene(activeScene);
            canvas.removeEventListener('click', checkButtonClicks, false);

        }
    }
}

function checkThief() {
    var accusedName = prompt("Who stole the crown?\n -Jester", "Enter the name of the thief");

    if (accusedName == thief.npcName) {
        alert("You win!");
    }
    else {
        alert("You lose!");
    }

}



function drawDialogueText(text) {
    const textAreaWidth = 400;
    const lineSize = 24;
    var currentLine = ""; 
    var lineCount = 1;
    var wordArray = text.split(" ");

    context.font = '15px "Trebuchet MS", Helvetica, sans-serif';

    for (var i = 0; i < wordArray.length; i++) {
        if (context.measureText(currentLine + wordArray[i] + " ").width <= textAreaWidth) {
            currentLine += (wordArray[i] + " ");
        }
        else {
            context.fillText(currentLine, canvas.width / 2.5, canvas.height / 4.5 + (lineCount * lineSize));
            lineCount++;
            currentLine = wordArray[i] + " ";
        }

    }

    context.fillText(currentLine, canvas.width / 2.5, canvas.height / 4.5 + (lineCount * lineSize));
}

