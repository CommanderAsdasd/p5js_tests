var img;
function preload() {
  img = loadImage("cat.jpg");
}



function setup() {
  createCanvas(500,500);
  image(img, 0, 0);
  var d = pixelDensity();
  var halfImage = img.width * img.height * 0.3;
  loadPixels();
  for (var i = 0; i < pixels.length; i++) {
    // var sect = random(pixels.length);
    a = [0,1]
    var rand = a[Math.floor(Math.random() * a.length)];
    if (rand) {
    pixels[i] = pixels[i+1];
    // print(pixels[i]);
    }
  }
  updatePixels();
}

function draw() {

    // 
    // var halfImage = 0.1 * (img.width * d * mouseX) * (img.height * d);
}