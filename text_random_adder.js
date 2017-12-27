function setup() {
    createCanvas(500, 500);
}

// a = new KeyTyped();
// console.log("a")

function draw() {
    // a = keyTyped();
    // console.log(a);
    if (keyIsPressed === true) {
        text(key, random(width), random(height));
    }
}