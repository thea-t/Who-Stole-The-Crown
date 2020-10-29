function startConversation(npcToStartConversationWith) {
    clickedNpc = npcToStartConversationWith;

    canvas.removeEventListener('click', checkMouseClick, false);

    canvas.addEventListener('click', checkButtonClicks, false);

    drawConversationScene();
    randomizeNumbers();
}

var randomNumber = new Array();

function randomizeNumbers() {

    //first giving it values from 0 to 23
    for (var i = 0; i < 24; i++) {
        randomNumber[i] = i;
    }

    var lastNumber;
    //then shuffle all the values
    for (var i = 0; i < 24; i++) {
        var random = Math.floor(Math.random() * 24);
        lastNumber = randomNumber[random];
        randomNumber[random] = randomNumber[i];
        randomNumber[i] = lastNumber;

    }
}

//stores the current questions picked each conversation, so that it can be redrawn.
var currentQuestion1;
var currentQuestion2;
var currentQuestion3;


function askQuestion(currentQuestion) {
    drawConversationScene();
    context.font = '15px "Trebuchet MS", Helvetica, sans-serif';

    //stores the answers of each question from the 2d array
    var answerText = questionsAndAnswers[currentQuestion][1];

    //if the question has a clue, then add the clue to the answer
    if (currentQuestion < 11) {

        if (currentQuestion == 0) {

            //check if the thief is wearing green and give clues accordingly
            if (thief.npcWearsGreen == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 1) {
            //check if the thief is working for the king and give clues accordingly
            if (thief.npcWorksForKing == true) {
                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 2) {

            //check if the thief has horse and give clues accordingly
            if (thief.npcHasHorse == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 3) {

            //check if the thief has cuts and give clues accordingly
            if (thief.npcHasCuts == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 4) {

            //check if the thief is a pirate and give clues accordingly
            if (thief.npcIsPirate == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 5) {

            //check if the thief has sword and give clues accordingly
            if (thief.npcHasSword == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 6) {

            //check if the thief is peasant and give clues accordingly
            if (thief.npcIsPoorVillager == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 7) {

            //check if the thief has a hat and give clues accordingly
            if (thief.npcHasHat == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 8) {

            //check if the thief has armor and give clues accordingly
            if (thief.npcHasArmor == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 9) {

            //check if the thief wears black and give clues accordingly
            if (thief.npcWearsBlack == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else {

            //check if the thief has shield and give clues accordingly
            if (thief.npcHasShield == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }

    }

    drawDialogueText(answerText);
    drawQuestions(currentQuestion1, currentQuestion2, currentQuestion3);
}

//drawing the dialogue text multiline
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

