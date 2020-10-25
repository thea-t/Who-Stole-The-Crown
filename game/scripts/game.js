function playGame() {

   
    //pick a random guilty npc
    thief = npcs[Math.floor(Math.random() * npcs.length)];
    alert(thief.npcName);

    canvas.removeEventListener('click', playGame, false);

    //load audio
    backgroundMusic = new Audio('music.mp3');
    backgroundMusic.loop = true;
    backgroundMusic.play();

    //call the loadScene3 function in order to load the default scene
    loadScene3();

    //detect mouse click
    canvas.addEventListener('click', checkMouseClick, false);

    randomizeNumbers();
}

function checkMouseClick() {

    // get the hotizontal and the vertical coordinate
    var x = event.clientX;
    var y = event.clientY;

    // make the canvas start from (0,0) in order to get accurate coordinates of the npc's positions
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    //check if the mouse click is inside the left or the right arrow buttons's position
    if (x > 0 && x < leftArrowImage.width) {
        if (y > canvas.height / 2 && y < canvas.height / 2 + leftArrowImage.height) {
            changeScene(false);
        }
    }
    else if (x > canvas.width - 100 && x < canvas.width - 100 + rightArrowImage.width) {
        if (y > canvas.height / 2 && y < canvas.height / 2 + rightArrowImage.height) {
            changeScene(true);
        }
    }
        //check if the mouse click's position is inside the npc's position for each active scene, then start conversation and draw intro for each npc
    else if (activeScene == 0) {
        
        
        if (x > npcs[2].npcPositionX && x < npcs[2].npcPositionX + darkKnightImage.width) {
            if (y > npcs[2].npcPositionY && y < npcs[2].npcPositionY + darkKnightImage.height) {
                startConversation(npcs[2]);
                drawIntro(2);
                drawQuestions(randomNumber[1], randomNumber[2], randomNumber[3]);
            }
        }
        else if (x > npcs[12].npcPositionX && x < npcs[12].npcPositionX + twoToesImage.width) {
            if (y > npcs[12].npcPositionY && y < npcs[12].npcPositionY + twoToesImage.height) {
                startConversation(npcs[12]);
                drawIntro(12);
                drawQuestions(randomNumber[4], randomNumber[5], randomNumber[6]);
            }
        }
        else if (x > npcs[0].npcPositionX && x < npcs[0].npcPositionX + sparrowImage.width) {
            if (y > npcs[0].npcPositionY && y < npcs[0].npcPositionY + sparrowImage.height) {
                startConversation(npcs[0]);
                drawIntro(0);
                drawQuestions(randomNumber[7], randomNumber[8], randomNumber[9]);
            }
        }
    }
    else if (activeScene == 1) {


        if (x > npcs[1].npcPositionX && x < npcs[1].npcPositionX + robinImage.width) {
            if (y > npcs[1].npcPositionY && y < npcs[1].npcPositionY + robinImage.height) {
                startConversation(npcs[1]);
                drawIntro(1);
                drawQuestions(randomNumber[10], randomNumber[11], randomNumber[12]);
            }
        }
        else if (x > npcs[8].npcPositionX && x < npcs[8].npcPositionX + sivisImage.width) {
            if (y > npcs[8].npcPositionY && y < npcs[8].npcPositionY + sivisImage.height) {
                startConversation(npcs[8]);
                drawIntro(8);
                drawQuestions(randomNumber[13], randomNumber[14], randomNumber[15]);
            }
        }
    }
    else if (activeScene == 2) {
        
        if (x > npcs[5].npcPositionX && x < npcs[5].npcPositionX + sirHenryImage.width) {
            if (y > npcs[5].npcPositionY && y < npcs[5].npcPositionY + sirHenryImage.height) {
                startConversation(npcs[5]);
                drawIntro(5);
                drawQuestions(randomNumber[16], randomNumber[17], randomNumber[18]);
            }
        }
        else if (x > npcs[15].npcPositionX && x < npcs[15].npcPositionX + donaldImage.width) {
            if (y > npcs[15].npcPositionY && y < npcs[15].npcPositionY + donaldImage.height) {
                startConversation(npcs[15]);
                drawIntro(15);
                drawQuestions(randomNumber[19], randomNumber[20], randomNumber[21]);
            }
        }
    }
    else if (activeScene == 3) {
        
        if (x > king.npcPositionX && x < king.npcPositionX + kingImage.width) {
            if (y > king.npcPositionY && y < king.npcPositionY + kingImage.height) {
                startConversation(king);
                drawIntro(16);
                context.font = '15px "Trebuchet MS", Helvetica, sans-serif';
                context.fillText("I found the thief!", 120, 345);
                context.fillText("I need more time", 120, 445);
                context.fillText("It's too difficult, I give up!", 540, 345);

            }
        }
        else if (x > npcs[3].npcPositionX && x < npcs[3].npcPositionX + jesterImage.width) {
            if (y > npcs[3].npcPositionY && y < npcs[3].npcPositionY + jesterImage.height) {
                startConversation(npcs[3]);
                drawIntro(3);
                drawQuestions(randomNumber[22], randomNumber[23], randomNumber[0]);
            }
        }
        else if (x > npcs[4].npcPositionX && x < npcs[4].npcPositionX + chefImage.width) {
            if (y > npcs[4].npcPositionY && y < npcs[4].npcPositionY + chefImage.height) {
                startConversation(npcs[4]);
                drawIntro(4);
                drawQuestions(randomNumber[1], randomNumber[5], randomNumber[7]);
            }
        }
    }
    else if (activeScene == 4) {
        
        if (x > npcs[6].npcPositionX && x < npcs[6].npcPositionX + sirArthurImage.width) {
            if (y > npcs[6].npcPositionY && y < npcs[6].npcPositionY + sirArthurImage.height) {
                startConversation(npcs[6]);
                drawIntro(6);
                drawQuestions(randomNumber[4], randomNumber[2], randomNumber[8]);
            }
        }
        else if (x > npcs[7].npcPositionX && x < npcs[7].npcPositionX + sirBromImage.width) {
            if (y > npcs[7].npcPositionY && y < npcs[7].npcPositionY + sirBromImage.height) {
                startConversation(npcs[7]);
                drawIntro(7);
                drawQuestions(randomNumber[3], randomNumber[6], randomNumber[22]);
            }
        }
    }
    else if (activeScene == 5) {
        
     
        if (x > npcs[9].npcPositionX && x < npcs[9].npcPositionX + resseImage.width) {
            if (y > npcs[9].npcPositionY && y < npcs[9].npcPositionY + resseImage.height) {
                startConversation(npcs[9]);
                drawIntro(9);
                drawQuestions(randomNumber[15], randomNumber[14], randomNumber[18]);
            }
        }
        else if (x > npcs[10].npcPositionX && x < npcs[10].npcPositionX + hoelImage.width) {
            if (y > npcs[10].npcPositionY && y < npcs[10].npcPositionY + hoelImage.height) {
                startConversation(npcs[10]);
                drawIntro(10);
                drawQuestions(randomNumber[19], randomNumber[11], randomNumber[21]);
            }
        }
        else if (x > npcs[11].npcPositionX && x < npcs[11].npcPositionX + barryImage.width) {
            if (y > npcs[11].npcPositionY && y < npcs[11].npcPositionY + barryImage.height) {
                startConversation(npcs[11]);
                drawIntro(11);
                drawQuestions(randomNumber[0], randomNumber[10], randomNumber[12]);
            }
        }
    }
    else if (activeScene == 6) {
        

        if (x > npcs[14].npcPositionX && x < npcs[14].npcPositionX + zorroImage.width) {
            if (y > npcs[14].npcPositionY && y < npcs[14].npcPositionY + zorroImage.height) {
                startConversation(npcs[14]);
                drawIntro(14);
                drawQuestions(randomNumber[13], randomNumber[20], randomNumber[17]);
            }
        }
        else if (x > npcs[13].npcPositionX && x < npcs[13].npcPositionX + blackBartImage.width) {
            if (y > npcs[13].npcPositionY && y < npcs[13].npcPositionY + blackBartImage.height) {
                startConversation(npcs[13]);
                drawIntro(13);
                drawQuestions(randomNumber[9], randomNumber[23], randomNumber[16]);
            }
        }
    }
   
}

//declare the 3rd scene to be the active scene by default (when the game starts)
var activeScene = 3;

function drawArrows() {

    //load arrow images from their image source
    leftArrowImage = new Image();
    leftArrowImage.src = "art/left.png";
    rightArrowImage = new Image();
    rightArrowImage.src = "art/right.png";

    //draw the arrow images after they are loaded
    leftArrowImage.onload = function () {
        context.drawImage(leftArrowImage, 0, canvas.height / 2);
    }
    rightArrowImage.onload = function () {
        context.drawImage(rightArrowImage, canvas.width - 100, canvas.height / 2);
    }

}

function changeScene(goToRight) {
    if (goToRight) {
        //change the scene(+1) when the right arrow is clicked and the active scene is smaller than 6
        if (activeScene < 6) {
            activeScene++;
            loadScene(activeScene);
        }
    }
    //change the scene(-1) when the left arrow is clicked and the active scene is bigger than 0
    else {
        if (activeScene > 0) {
            activeScene--;
            loadScene(activeScene);
        }
    }
}

//load scenes at the given index
function loadScene(sceneIndex) {
    if (sceneIndex == 0) {
        loadScene0();
    }
    else if (sceneIndex == 1) {
        loadScene1();
    }
    else if (sceneIndex == 2) {
        loadScene2();
    }
    else if (sceneIndex == 3) {
        loadScene3();
    }
    else if (sceneIndex == 4) {
        loadScene4();
    }
    else if (sceneIndex == 5) {
        loadScene5();
    }
    else if (sceneIndex == 6) {
        loadScene6();
    }

    canvas.addEventListener('click', checkMouseClick, false);
}


function loadScene0() {

    //load background image
    var backgroundImage = new Image();
    backgroundImage.src = "art/background-4-flipped.png";

    //draw the image after it is loaded
    backgroundImage.onload = function () {
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        //calls the drawArrows function
        drawArrows();

        //load npc images from their image source
        darkKnightImage = new Image();
        darkKnightImage.src = npcs[2].npcImageSource;
        twoToesImage = new Image();
        twoToesImage.src = npcs[12].npcImageSource;
        sparrowImage = new Image();
        sparrowImage.src = npcs[0].npcImageSource;

        //draw the npc images after they are loaded
        darkKnightImage.onload = function () {
            context.drawImage(darkKnightImage, npcs[2].npcPositionX, npcs[2].npcPositionY);
        }
        twoToesImage.onload = function () {
            context.drawImage(twoToesImage, npcs[12].npcPositionX, npcs[12].npcPositionY);
        }
        sparrowImage.onload = function () {
            context.drawImage(sparrowImage, npcs[0].npcPositionX, npcs[0].npcPositionY);
        }

    }
}
function loadScene1() {

    //load background image
    var backgroundImage = new Image();
    backgroundImage.src = "art/background-3-flipped.png";

    //draw the image after it is loaded
    backgroundImage.onload = function () {
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        //calls the drawArrows function
        drawArrows();

        //load npc images from their image source
        robinImage = new Image();
        robinImage.src = npcs[1].npcImageSource;
        sivisImage = new Image();
        sivisImage.src = npcs[8].npcImageSource;
       
        //draw the npc images after they are loaded
        robinImage.onload = function () {
            context.drawImage(robinImage, npcs[1].npcPositionX, npcs[1].npcPositionY);
        }
        sivisImage.onload = function () {
            context.drawImage(sivisImage, npcs[8].npcPositionX, npcs[8].npcPositionY);
        }

    }
}
function loadScene2() {

    //load background image
    var backgroundImage = new Image();
    backgroundImage.src = "art/background-2-flipped.png";

    //draw the image after it is loaded
    backgroundImage.onload = function () {
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        //calls the drawArrows function
        drawArrows();

        //load npc images from their image source
        sirHenryImage = new Image();
        sirHenryImage.src = npcs[5].npcImageSource;
        donaldImage = new Image();
        donaldImage.src = npcs[15].npcImageSource;

        //draw the npc images after they are loaded
        sirHenryImage.onload = function () {
            context.drawImage(sirHenryImage, npcs[5].npcPositionX, npcs[5].npcPositionY);
        }
        donaldImage.onload = function () {
            context.drawImage(donaldImage, npcs[15].npcPositionX, npcs[15].npcPositionY);
        }

    }
}
function loadScene3() {

    //load background image
    var backgroundImage = new Image();
    backgroundImage.src = "art/background-1.png";

    //draw the image after it is loaded
    backgroundImage.onload = function () {
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        //calls the drawArrows function
        drawArrows();

        //load npc images from their image source
        jesterImage = new Image();
        jesterImage.src = npcs[3].npcImageSource;
        chefImage = new Image();
        chefImage.src = npcs[4].npcImageSource;
        kingImage = new Image();
        kingImage.src = king.npcImageSource;

        //draw the npc images after they are loaded
        jesterImage.onload = function () {
            context.drawImage(jesterImage, npcs[3].npcPositionX, npcs[3].npcPositionY);
        }
        chefImage.onload = function () {
            context.drawImage(chefImage, npcs[4].npcPositionX, npcs[4].npcPositionY);
        }
        kingImage.onload = function () {
            context.drawImage(kingImage, king.npcPositionX, king.npcPositionY);
        }

    }
}
function loadScene4() {

    //load background image
    var backgroundImage = new Image();
    backgroundImage.src = "art/background-2.png";

    //draw the image after it is loaded
    backgroundImage.onload = function () {
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        //calls the drawArrows function
        drawArrows();

        //load npc images from their image source
        sirArthurImage = new Image();
        sirArthurImage.src = npcs[6].npcImageSource;
        sirBromImage = new Image();
        sirBromImage.src = npcs[7].npcImageSource;

        //draw the npc images after they are loaded
        sirArthurImage.onload = function () {
            context.drawImage(sirArthurImage, npcs[6].npcPositionX, npcs[6].npcPositionY);
        }
        sirBromImage.onload = function () {
            context.drawImage(sirBromImage, npcs[7].npcPositionX, npcs[7].npcPositionY);
        }

    }
}
function loadScene5() {

    //load background image
    var backgroundImage = new Image();
    backgroundImage.src = "art/background-3.png";

    //draw the image after it is loaded
    backgroundImage.onload = function () {
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        //calls the drawArrows function
        drawArrows();

        //load npc images from their image source
        resseImage = new Image();
        resseImage.src = npcs[9].npcImageSource;
        hoelImage = new Image();
        hoelImage.src = npcs[10].npcImageSource;
        barryImage = new Image();
        barryImage.src = npcs[11].npcImageSource;

        //draw the npc images after they are loaded
        resseImage.onload = function () {
            context.drawImage(resseImage, npcs[9].npcPositionX, npcs[9].npcPositionY);
        }
        hoelImage.onload = function () {
            context.drawImage(hoelImage, npcs[10].npcPositionX, npcs[10].npcPositionY);
        }
        barryImage.onload = function () {
            context.drawImage(barryImage, npcs[11].npcPositionX, npcs[11].npcPositionY);
        }

    }
}
function loadScene6() {

    //load background image
    var backgroundImage = new Image();
    backgroundImage.src = "art/background-4.png";

    //draw the image after it is loaded
    backgroundImage.onload = function () {
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        //calls the drawArrows function
        drawArrows();

        //load npc images from their image source
        zorroImage = new Image();
        zorroImage.src = npcs[14].npcImageSource;
        blackBartImage = new Image();
        blackBartImage.src = npcs[13].npcImageSource;

        //draw the npc images after they are loaded
        zorroImage.onload = function () {
            context.drawImage(zorroImage, npcs[14].npcPositionX, npcs[14].npcPositionY);
        }
        blackBartImage.onload = function () {
            context.drawImage(blackBartImage, npcs[13].npcPositionX, npcs[13].npcPositionY);
        }

    }
}

