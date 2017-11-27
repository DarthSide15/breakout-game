var canvas = document.getElementById("myCanvas");       // Targets the canvas element from HTML file
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;                               // Starting position
var y = canvas.height - 30;
var dx = -1;                                             // Controls speed and direction
var dy = 0;

function drawBall() {

    ctx.beginPath();                    // Start drawing
    ctx.arc(x, y, 10, 0, Math.PI*2);    // Our ball's parameters
    ctx.fillStyle = "#0095DD";          // What color will be used to fill
    ctx.fill();                         // Fill with the color chosen above
    ctx.closePath();                    // Stop drawing
}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);   // Clears canvas after each frame
    drawBall();                                         // Draws ball
    x += dx;                                            // Changes x position
    y += dy;                                            // Changes y position
}

setInterval(draw, 10);                                  // Repeats every 10ms, until we stop it