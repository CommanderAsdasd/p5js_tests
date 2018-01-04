// var pixCol = color(random(0, 255), random(0, 255), random(0, 255));



function setup() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 10; i++) {
        pixel(i);
    }
}

function draw() {

}

function pixel(count) {
    noStroke();
    fill(random(1, 255), random(1, 255), random(1, 255));
    rect(50, 50 * count, 50, 50);
    // noFill();
}