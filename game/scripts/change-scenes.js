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


function checkArrowClick() {

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
}
//declare the 3rd scene to be the active scene by default (when the game starts)
var activeScene = 3;
