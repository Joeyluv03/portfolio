
let canvas;
let xPos = 0;
let yPos = 0;
let easing = 0.05;
let img; // Declare the image variable

function preload() {
    // Load the image in the preload function
    img = loadImage('images/star.gif'); // Replace with the correct path to your image
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);
    
    drawThing(xPos, yPos);
}

function drawThing(_x, _y) {
    imageMode(CENTER); // Align the image center to the position
    image(img, _x, _y, 100, 100); // Draw the image at the specified position and size
}
