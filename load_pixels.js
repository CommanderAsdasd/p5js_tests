function setup() {
    createCanvas(500, 500);
    var pink = color(255, 102, 204);
    img = createImage(66, 66);
    img.loadPixels();
    for (var i = 0; i < 4*(width*height/2); i+=4) {
      img.pixels[i] = red(pink);
      img.pixels[i+1] = green(pink);
      img.pixels[i+2] = blue(pink);
      img.pixels[i+3] = alpha(pink);
    }
    img.updatePixels();
    image(img, 17, 17);
}
