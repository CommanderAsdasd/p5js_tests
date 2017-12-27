function setup() {
    createCanvas(500, 500);
    var pink = color(random(255), 102, 204);
    loadImage("assets/laDefence.jpg", function(img) {
        image(img, 0, 0);
    });
    // img = createImage(66, 66);
    img.loadPixels();
    // img.loadpixels подгружает пиксели изображения
    for (var i = 0; i < 4 * (width*height/2); i+=4) {
        // вот что делают функции red и green? Извлекает одну компоненту цвета
        img.pixels[i] = red(pink);
        img.pixels[i+1] = green(pink);
        img.pixels[i+2] = blue(pink);
        img.pixels[i+3] = alpha(pink);
    }
    img.updatePixels();
    image(img, 17, 17);
}