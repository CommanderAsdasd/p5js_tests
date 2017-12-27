function setup() {
    // here we use a callback to display the image after loading
    // load image can call a function as callback after loading
    loadImage("./assets/gorin.png", function(img) {
        image(img, 0, 0);
    });
}