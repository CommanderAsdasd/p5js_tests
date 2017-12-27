function setup() {
    createCanvas(100, 100);
}

function draw() {
    for (var i = 0; i < 100; i++) {
        rect(random(100), random(100), 1, 1);
    }
}