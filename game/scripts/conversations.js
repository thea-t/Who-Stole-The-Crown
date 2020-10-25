var intros = [
    "Arrr, what do you want land-lover? Tell me fast before I chop your head off!",
    "Hello traveler! I'm Robin from the Hood. My friends call me Robin Hood because I hate capitalism.",
    "Huh, I'm busy you puny human! How dare you interrupt my hunt?",
    "I'm Jester, ehee! I love my job, but nobody respects my work around here. Would you like to hear a joke, ehee?",
    "Oh dear, you seem hungry! I'm cooking turkey stew for dinner. Why don't you join?",
    "I'm Sir Henry, the Peacekeeper. Do not confuse me with that blasphemous who calls himself Sir Arthur.",
    "I'm Sir Arthur, the one and only Kings Guard. I have never lost a battle. Speak fast or get lost!",
    "Oh hello, I didn't see you there! I was chasing this butterfly but I don't know where it flew. Have you seen it?",
    "Why are you staring at me? Is it because of the cuts on my face?.. I told everyone already, I had a little shaving accident!",
    "Hey, I'm Resse! But you can start calling me Sir Resse already. I'll become a knight one day!",
    "Oh, you want to speak to me? That's an honor, Sir! I have never spoken to anyone outside the village before.",
    "Hello Sir, may I help you? I'm the shepherd of the village. Are you here to buy a cattle?",
    "They call me Two Toes, but I guARRentee you that I have three toes!",
    "What? Can't a pirate like me wear a fancy hat? It hides my bald spots.",
    "I'm Zorro, the Pirate Hunter. I hunt those that break the law. But don't confuse me with those damn knights.",
    "Sssh, quiet! I'm hiding from that evil knight! He keeps kidnapping me but I keep escaping. He even stole my clothes.",
    "It's not easy to be a king. In the end of the day I have an entire kingdom to rule! Have you found the thief by the way?",
];
var questionsAndAnswers = [
    //with clues
    ["What's your favorite color?", "My favorite color? I love wearing green."],//wearsGreen
    ["Who is the closest to the king?", "Uhm, I don't know? Maybe the queen?"],//worksForKing
    ["Do you have any hobbies?", "I like riding horses."],//hasHorse
    ["Where were you when the crown was stolen?﻿", "I was washing my socks in the river near the castle."],//hasCuts
    ["Who is the biggest liar in the village?", "I'm a very honest man as you might have heard it already."],//isPirate
    ["What’s the most expensive thing you own?﻿", "It is the sword that my father left to me after he died."],//hasSword
    ["Have you been in the castle yesterday?", "Not as far as I remember."],//isVillager
    ["Do you know that the king's crown is missing?", "Of course I know, everyone is talking about it! That shiny crown would look so nice on my head."],//hasHat
    ["What do you usually do in your free time?", "I like watching the guards polishing their armors."],//hasArmor
    ["Is there anything  you want to share with me?", "You want me to share a secret?... I like the color black."],//wearsBlack
    ["Where were you till now?", "I just came back from my morning walk. You won't believe it but I found an abandoned shield."],//hasShield
    //without clues.
    ["Have you spoken with anyone today?", "Yes, I saw my buddy in the tavern. We had a little chat. We argued all day about what to call a medieval soldier. But it was getting late so we decided to call it a knight."],
    ["What were you doing yesterday night?", "What do you think I was doing, dummy? Nights are for sleeping, aren't they?"],
    ["Do you know what happened yesterday?", "You mean other than the missing crown? No, haven't heard of anyting."],
    ["Have you seen anything suspicious yesterday?", "I don't even remember anything from yesterday night. I was dead drunk from the whiskey soup I had at lunch."],
    ["Do you lie often?", "Sir, are you accusing me of something? Because if you are, I'll report you to my buddy who works in the courthouse."],
    ["Did something extraordinary happen yesterday?", "Yes! You won't believe it, but I found the missing princess by following her foot prince."],
    ["How do you know that the crown is missing?", "The crown is missing? Never heard that before. I hope they'll catch the god damn thief!"],
    ["Do you like hats?", "Who doesn't like hats? From thieves to knights, everyone like hats."],
    ["Do you wear hats often?", "Not that often, but I do once in a while. They make me look so fancy."],
    ["Do you know some pirates?", "Of course I do! The pirates in this kingdom have a big reputation. You don't want to mess with them."],
    ["Tell me a joke!", "Why did Arthur have a round table?\n-So no one could corner him!"],
    ["Where was your wife yesterday night?", "At home of course. We were discussing what to name our newborn baby. I wanted to name him Lance, but my wife said it was too uncommon. I told her that in medieval days, people were named Lance a lot."],
    ["Have you heard about something gone missing?", "Of course, its the servant that went missing weeks ago! We were searching for him in the forest, but all we could find was a strange paper saying \"404: Page Not Found\". No clue what it means though."]
];

var clues = [
    ["Just like the guy who left the castle yesterday night.","Although, I haven't seen anyone else who likes green."],
    ["I don't trust anyone who works for the king though.","I trust everyone who works for the king."],
    ["I saw a beautiful horse yesterday night waiting in front of the castle.","I think that the horse owners are very honorable people."],
    ["I think saw a man with cuts on his face, running away from the castle.","I saw a man running away from the castle. He had such a handsome face, no cuts at all."],
    ["However, I don't trust these damn pirates. They always steal stuff.","Just like my pirate friends are. I trust them with my everything since they saved my life."],
    ["Not even the person that I saw yesterday night around the castle, has a sword as shiny as mine!","Anyone who carries a sword, has something to fight for... Very righteous people!"],
    ["But strangely enough, I've heard that a peasant was around it yesterday night. I though they weren't allowed to be near the castle.","I can ensure you that none of the peasants were there either. They aren't allowed to be near the castle."],
    ["I'm sure the guy with the hat stole it in order to wear it himself.","I'm sure someone who couldn't wear a hat stole it."],
    ["You had to see the armor that I saw yesterday night! It was so shiny, at first I thought the king was leaving the castle.","I have always the knights with armors. They are so trustworthy!"],
    ["But I'm not the only one in the kingdom. There are rumors that the thieves like it too.","But everyone else that I know hates it. I've heard that even the thieves hate it."],
    ["It was near the castle door. Maybe someone dropped it yesterday night.","It was in the forest. Those poor shield-men, they defend the kingdom all the time... I must find the owner."],
];



var randomNumber = new Array();

function randomizeNumbers() {

    //first give it values from 0 to 24
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




var currentNpc;
//stores the current questions picked for that conversation so that it can be redrawn.
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
    context.fillText(questionsAndAnswers[question1][0], 120, 345);
    context.fillText(questionsAndAnswers[question2][0], 120, 445);
    context.fillText(questionsAndAnswers[question3][0], 540, 345);

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
        context.fillText("Goodbye", 540, 445);

        context.font = '30px "Trebuchet MS", Helvetica, sans-serif';
        context.fillText(currentNpc.npcName, canvas.width / 2.5, canvas.height / 4.5-30);
    }


}

function askQuestion(currentQuestion) {
    drawConversationScene();
    context.font = '15px "Trebuchet MS", Helvetica, sans-serif';

    var answerText = questionsAndAnswers[currentQuestion][1];

    if (currentQuestion < 11) {

        if (currentQuestion == 0) {
            if (thief.npcWearsGreen == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 1) {
            if (thief.npcWorksForKing == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 2) {
            if (thief.npcHasHorse == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 3) {
            if (thief.npcHasCuts == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 4) {
            if (thief.npcIsPirate == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 5) {
            if (thief.npcHasSword == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 6) {
            if (thief.npcIsPoorVillager == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 7) {
            if (thief.npcHasHat == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 8) {
            if (thief.npcHasArmor == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else if (currentQuestion == 9) {
            if (thief.npcWearsBlack == true) {

                answerText = answerText + " " + clues[currentQuestion][0];
            }
            else {

                answerText = answerText + " " + clues[currentQuestion][1];
            }
        }
        else {
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
                askQuestion(currentQuestion1);
            }
            else {
                checkThief();
            }
        }
        //bot-left
        else if (y > 400 && y < 400 + buttonImage.height * 1.8) {

            if (currentNpc.npcName != "King") {
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
            if (currentNpc.npcName != "King") {
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

function checkThief() {

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

    if (accusedName != null) {
        if (accusedName == thief.npcName) {
            finalScene(true);
            victory();

        }
        else {
            finalScene(false);
            defeat();
        }
    }
    

}

function finalScene(wonGame) {

    canvas.removeEventListener('click', checkButtonClicks, false);
    canvas.addEventListener('click', checkTryAgainButton, false);

 

    //load background image
    var victoryImage = new Image();
    victoryImage.src = "art/victory.png";

    //draw the image after it is loaded
    victoryImage.onload = function () {
        context.drawImage(victoryImage, 0, 0, canvas.width, canvas.height);


        //load background image
        var theKingWithCrownImage = new Image();
        theKingWithCrownImage.src = "art/TheKingWithCrown.png";

        //load background image
        var conversationBubbleImage = new Image();
        conversationBubbleImage.src = "art/conversation_bubble.png";



        //draw the image after it is loaded
        conversationBubbleImage.onload = function () {


            context.drawImage(conversationBubbleImage, 50, 100, 500, 430,);
            context.font = '13px "Trebuchet MS", Helvetica, sans-serif';
            context.textAlign = "center";
            context.fillText(" YOU FOUND THE THIEF!", 295, 290);
            context.fillText("I knew that I could count on you.", 295, 290 + 25);
            context.fillText("You are promoted to a royal detective!", 300, 290 + 50);
            
        }

        //draw the image after it is loaded
        theKingWithCrownImage.onload = function () {
            context.drawImage(theKingWithCrownImage, 20, 470);


        }
        context.drawImage(buttonImage, 600, 350, 220, 70);
        context.font = '30px serif';
        context.strokeStyle = "gray";
        context.strokeText("PLAY AGAIN", 620, 390);
    }

}

function checkTryAgainButton() {
        var x = event.clientX;
    var y = event.clientY;

    // make the canvas start from (0,0) in order to get accurate coordinates of the npc's positions
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    if (x > 600 && x < 600 + buttonImage.width*1.15) {
        if (y > 350 && y < 350 + buttonImage.height*1.45) {

            startGame();
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

        //load background image
        var theKingImage = new Image();
        theKingImage.src = "art/TheKing.png";

        //load background image
        var conversationBubbleImage = new Image();
        conversationBubbleImage.src = "art/conversation_bubble.png";



        //draw the image after it is loaded
        conversationBubbleImage.onload = function () {

           
            context.drawImage(conversationBubbleImage, 50, 100, 500, 430,);
            context.font = '13px "Trebuchet MS", Helvetica, sans-serif';
            context.textAlign = "center";
            context.fillText("THIS IS NOT THE THIEF!", 295, 290);
            context.fillText("Unfortunately.. you disappointed me, detective.", 295, 290 + 25);
            context.fillText("Jester, call the executioner!", 300, 290 + 50);
        }


        //draw the image after it is loaded
        theKingImage.onload = function () {
            context.drawImage(theKingImage, 20, 470);

            
        }
        context.drawImage(buttonImage, 600, 350, 220, 70);
        context.font = '30px serif';
        context.strokeStyle = "gray";
        context.strokeText("PLAY AGAIN", 620, 390);
       
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

