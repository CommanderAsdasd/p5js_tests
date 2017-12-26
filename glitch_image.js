var img; // Declare variable 'img'.
var position;
var count;
var x;
var y;
// var velocity = createVector(0.0,0.0);
// var acceleration = createVector(0.0,0.0);
function preload() {
    img = loadImage("cat.jpg");
}

function setup() {
    position = createVector(0, 0);
    createCanvas(800, 600);
    count = 0;
    x = 0;
    y = 0;
    // img = loadImage("http://upload.wikimedia.org/wikipedia/commons/2/2c/Additive_color_mixing_simulated.png");  // Load the image
    //canvas.resize(img.width,img.height);
    image(img, position.x, position.y);
}

function draw() {
    if (touchIsDown || mouseIsPressed) {
        img.loadPixels();
        //swapPixels(125);
        // swapLines(count%height,(height-1)-(count%height));
        // swapCols(count%width,(width-1)-(count%width));
        swapLines(y % height, (height - 1) - (y % height));
        swapCols(x % width, (width - 1) - (x % width));
        img.updatePixels();
        image(img, position.x, position.y);
    }
    // count++;

}

function touchStarted() {
    x = touchX;
    y = touchY;
    return false;
}

function touchMoved() {
    if (touchIsDown || mouseIsPressed) {
        x = touchX;
        y = touchY;
    }
}

function swapLines(lineA, lineB) {
    var lineBuffer = [];
    for (var i = 0; i < img.width; i++) {
        lineBuffer[0] = img.pixels[4 * (lineA * img.width + i)];
        img.pixels[4 * (lineA * img.width + i)] = img.pixels[4 * (lineB * img.width + i)];
        img.pixels[4 * (lineB * img.width + i)] = lineBuffer[0];
        lineBuffer[1] = img.pixels[4 * (lineA * img.width + i) + 1];
        img.pixels[4 * (lineA * img.width + i) + 1] = img.pixels[4 * (lineB * img.width + i) + 1];
        img.pixels[4 * (lineB * img.width + i) + 1] = lineBuffer[1];
        lineBuffer[2] = img.pixels[4 * (lineA * img.width + i) + 2];
        img.pixels[4 * (lineA * img.width + i) + 2] = img.pixels[4 * (lineB * img.width + i) + 2];
        img.pixels[4 * (lineB * img.width + i) + 2] = lineBuffer[2];
        lineBuffer[3] = img.pixels[4 * (lineA * img.width + i) + 3];
        img.pixels[4 * (lineA * img.width + i) + 3] = img.pixels[4 * (lineB * img.width + i) + 3];
        img.pixels[4 * (lineB * img.width + i) + 3] = lineBuffer[3];
    }
}

function swapCols(colA, colB) {
    var colBuffer = [];
    for (var i = 0; i < img.height; i++) {
        colBuffer[0] = img.pixels[4 * (i * img.width + colA)];
        colBuffer[1] = img.pixels[4 * (i * img.width + colA) + 1];
        colBuffer[2] = img.pixels[4 * (i * img.width + colA) + 2];
        colBuffer[3] = img.pixels[4 * (i * img.width + colA) + 3];
        img.pixels[4 * (i * img.width + colA)] = img.pixels[4 * (i * img.width + colB)];
        img.pixels[4 * (i * img.width + colA) + 1] = img.pixels[4 * (i * img.width + colB) + 1];
        img.pixels[4 * (i * img.width + colA) + 2] = img.pixels[4 * (i * img.width + colB) + 2];
        img.pixels[4 * (i * img.width + colA) + 3] = img.pixels[4 * (i * img.width + colB) + 3];
        img.pixels[4 * (i * img.width + colB)] = colBuffer[0];
        img.pixels[4 * (i * img.width + colB) + 1] = colBuffer[1];
        img.pixels[4 * (i * img.width + colB) + 2] = colBuffer[2];
        img.pixels[4 * (i * img.width + colB) + 3] = colBuffer[3];
    }
}

function swapPixels(pixels) {
    var pixelsToSwap = pixels;
    for (var i = 0; i < pixelsToSwap; i++) {
        swapPixel();
    }
}

function swapPixel() {
    var sourceX = int(random(img.width));
    var sourceY = int(random(img.height));
    var destX = int(random(img.width));
    var destY = int(random(img.height));
    var bufferR = img.pixels[4 * (sourceY * img.width + sourceX)];
    var bufferG = img.pixels[4 * (sourceY * img.width + sourceX) + 1];
    var bufferB = img.pixels[4 * (sourceY * img.width + sourceX) + 2];
    var bufferA = img.pixels[4 * (sourceY * img.width + sourceX) + 3];
    img.pixels[4 * (sourceY * img.width + sourceX)] = img.pixels[4 * (destY * img.width + destX)];
    img.pixels[4 * (sourceY * img.width + sourceX) + 1] = img.pixels[4 * (destY * img.width + destX) + 1];
    img.pixels[4 * (sourceY * img.width + sourceX) + 2] = img.pixels[4 * (destY * img.width + destX) + 2];
    img.pixels[4 * (sourceY * img.width + sourceX) + 3] = img.pixels[4 * (destY * img.width + destX) + 3];
    img.pixels[4 * (destY * img.width + destX)] = bufferR;
    img.pixels[4 * (destY * img.width + destX) + 1] = bufferG;
    img.pixels[4 * (destY * img.width + destX) + 2] = bufferB;
    img.pixels[4 * (destY * img.width + destX) + 3] = bufferA;
}