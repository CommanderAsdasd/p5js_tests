function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(127);
    noStroke();
    for (var i = 0; i < height; i += 20) {
      fill(129, 206, 15);
      rect(0, i, random(width), 10);
      fill(255);
      rect(i, 0, random(width), height);
    }
}