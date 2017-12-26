var img;

function preload() {
    img = loadImage("cat.jpg");
}



function setup() {
    createCanvas(500, 500);
    image(img, 0, 0);
    var d = pixelDensity();
    var halfImage = img.width * img.height * 0.3;

}

function stroke_rand() {
    return stroke(random(50), random(50), random(255));
}

function draw() {
    for (var i = 0; i < img.width; i = i + 0.5) {
        // stroke_rand();
        // stroke(random(100));
        rect(random(img.width), random(img.height), 1, 1);
    }
    // 
    // var halfImage = 0.1 * (img.width * d * mouseX) * (img.height * d);
}