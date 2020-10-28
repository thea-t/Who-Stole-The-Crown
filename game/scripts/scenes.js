
//declare the 3rd scene to be the active scene by default (when the game starts)
var activeScene = 3;


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
        donaldImage = new Image();
        donaldImage.src = npcs[15].npcImageSource;
        sparrowImage = new Image();
        sparrowImage.src = npcs[0].npcImageSource;

        //draw the npc images after they are loaded
        darkKnightImage.onload = function () {
            context.drawImage(darkKnightImage, npcs[2].npcPositionX, npcs[2].npcPositionY);
        }
        donaldImage.onload = function () {
            context.drawImage(donaldImage, npcs[15].npcPositionX, npcs[15].npcPositionY);
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
        twoToesImage = new Image();
        twoToesImage.src = npcs[12].npcImageSource;
       

        //draw the npc images after they are loaded
        sirHenryImage.onload = function () {
            context.drawImage(sirHenryImage, npcs[5].npcPositionX, npcs[5].npcPositionY);
        }
        twoToesImage.onload = function () {
            context.drawImage(twoToesImage, npcs[12].npcPositionX, npcs[12].npcPositionY);
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

