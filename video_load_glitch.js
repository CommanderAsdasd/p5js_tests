var fingers;

function setup() {
  createCanvas(320, 240);
  // specify multiple formats for different browsers
  fingers = createVideo(['assets/BitRanger_320240.mp4']);
  fingers.loop();
//   fingers.hide();
//   noStroke();
//   fill(0);
}

function draw() {
    background(255);
    var vidPix = fingers.loadPixels();
    var stepSize = round(constrain(mouseX / 8, 6, 32));
//   console.log(vidPix);
    for (var y=0; y<height; y+=stepSize) {
        for (var x=0; x<width; x+=stepSize) {
            var i = y * width + x;
            var darkness = (255 - vidPix.pixels[i*4]) / 255;
            var radius = stepSize * darkness;
            fill 
            rect(x, y, radius, radius);
        }
    }
}