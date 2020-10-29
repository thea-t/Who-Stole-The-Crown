function checkThief() {
    //add prompt with the names of all npc's and store the player's answer
    var accusedName = prompt("Who stole the crown?\n -" +
        npcs[0].npcName + "\n -" +
        npcs[1].npcName + "\n -" +
        npcs[2].npcName + "\n -" +
        npcs[3].npcName + "\n -" +
        npcs[4].npcName + "\n -" +
        npcs[5].npcName + "\n -" +
        npcs[6].npcName + "\n -" +
        npcs[7].npcName + "\n -" +
        npcs[8].npcName + "\n -" +
        npcs[9].npcName + "\n -" +
        npcs[10].npcName + "\n -" +
        npcs[11].npcName + "\n -" +
        npcs[12].npcName + "\n -" +
        npcs[13].npcName + "\n -" +
        npcs[14].npcName + "\n -" +
        npcs[15].npcName, "Enter the name of the thief");

    //if the player's answer is not empty
    if (accusedName != null) {

        //if the player's answer is matching with the thief's name
        if (accusedName == thief.npcName) {
            victory();
        }
        else {
            defeat();
        }
    }


}

function victory() {

    canvas.removeEventListener('click', checkButtonClicks, false);
    canvas.addEventListener('click', checkTryAgainButton, false);



    //load background image
    var victoryImage = new Image();
    victoryImage.src = "art/victory.png";

    //draw the image after it is loaded
    victoryImage.onload = function () {
        context.drawImage(victoryImage, 0, 0, canvas.width, canvas.height);


        //load images
        var theKingWithCrownImage = new Image();
        theKingWithCrownImage.src = "art/TheKingWithCrown.png";

        var conversationBubbleImage = new Image();
        conversationBubbleImage.src = "art/conversation_bubble.png";


        //draw the image after it is loaded
        conversationBubbleImage.onload = function () {
            context.drawImage(conversationBubbleImage, 50, 100, 500, 430,);

            //draw the text, style and position it
            context.font = '13px "Trebuchet MS", Helvetica, sans-serif';
            context.textAlign = "center";
            context.fillText(" YOU FOUND THE THIEF!", 295, 290);
            context.fillText("I knew that I could count on you.", 295, 290 + 25);
            context.fillText("You are promoted to a royal detective!", 300, 290 + 50);
        }
        //draw the images after they are loaded
        theKingWithCrownImage.onload = function () {
            context.drawImage(theKingWithCrownImage, 20, 470);

            context.drawImage(buttonImage, 600, 350, 220, 70);

            //draw the text, style and position it
            context.font = '30px serif';
            context.strokeStyle = "gray";
            context.strokeText("PLAY AGAIN", 620, 390);

        }
    }

}

function defeat() {

    canvas.removeEventListener('click', checkButtonClicks, false);
    canvas.addEventListener('click', checkTryAgainButton, false);


    //load background image
    var defeatImage = new Image();
    defeatImage.src = "art/defeat.png";

    //draw the image after it is loaded
    defeatImage.onload = function () {
        context.drawImage(defeatImage, 0, 0, canvas.width, canvas.height);

        //load images
        var theKingImage = new Image();
        theKingImage.src = "art/TheKing.png";

        var conversationBubbleImage = new Image();
        conversationBubbleImage.src = "art/conversation_bubble.png";



        //draw the image after it is loaded
        conversationBubbleImage.onload = function () {
            context.drawImage(conversationBubbleImage, 50, 100, 500, 430,);

            //draw the text, style and position it
            context.font = '13px "Trebuchet MS", Helvetica, sans-serif';
            context.textAlign = "center";
            context.fillText("THIS IS NOT THE THIEF!", 295, 290);
            context.fillText("Unfortunately.. you disappointed me, detective.", 295, 290 + 25);
            context.fillText("Jester, call the executioner!", 300, 290 + 50);
        }

        theKingImage.onload = function () {
            context.drawImage(theKingImage, 20, 470);

            context.drawImage(buttonImage, 600, 350, 220, 70);

            //draw the text, style and position it
            context.font = '30px serif';
            context.strokeStyle = "gray";
            context.strokeText("PLAY AGAIN", 620, 390);
        }


    }


}

function checkTryAgainButton() {

    // get the hotizontal and the vertical coordinate
    var x = event.clientX;
    var y = event.clientY;

    // make the canvas start from (0,0) in order to get accurate coordinates of the npc's positions
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    if (x > 600 && x < 600 + buttonImage.width * 1.15) {
        if (y > 350 && y < 350 + buttonImage.height * 1.45) {

            //pause the music
            backgroundMusic.pause();

            //start the game from the startGame function
            canvas.removeEventListener('click', checkTryAgainButton, false);
            startGame();

        }

    }
}
