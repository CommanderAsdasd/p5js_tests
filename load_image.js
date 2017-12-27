function setup() {
  // here we use a callback to display the image after loading
  loadImage("assets/laDefense.jpg", function(img) {
    image(img, 0, 0);
  });
}