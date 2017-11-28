var canvas = document.getElementById("myCanvas");       // Targets the canvas element from HTML file
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;                               // Starting position
var y = canvas.height - 200;
var dx = -1;                                            // Controls speed and direction
var dy = 1;
var ballRadius = 10;
var paddleHeight = 12;
var paddleWidth = 80;
var paddleX = (canvas.width - paddleWidth) / 2;
var leftPress = false;
var rightPress = false;





function getRandomColor() {

    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



function drawBall() {

    ctx.beginPath();                                    // Start drawing
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);            // Our ball's parameters
    ctx.fillStyle = "0095DD";                           // What color will be used to fill
    ctx.fill();                                         // Fill with the color chosen above
    ctx.closePath();                                    // Stop drawing
}


function drawPaddle() {

    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "0095DD";
    ctx.fill();
    ctx.closePath();
}





function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);   // Clears canvas after each frame
    drawBall();                                         // Draws ball
    drawPaddle();                                       // Draws paddle

    // Bounces off top and bottom wall
    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius - paddleHeight) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
        }
    }


    // Bounces off left and right wall
    if (x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
        dx = -dx;
    }

    x += dx;                                            // Changes x position
    y += dy;                                            // Changes y position

    if(rightPress && paddleX < canvas.width - paddleWidth) {
        paddleX += 5;
    }
    else if (leftPress && paddleX > 0) {
        paddleX -= 5;
    }
}





document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {

    if (e.keyCode == 39) {
        rightPress = true;
    }
    else if (e.keyCode == 37) {
        leftPress = true;
    }
}

function keyUpHandler(e) {

    if (e.keyCode == 39) {
        rightPress = false;
    }
    else if (e.keyCode == 37) {
        leftPress = false;
    }

}




setInterval(draw, 10);                                  // Repeats every 10ms, until we stop it

