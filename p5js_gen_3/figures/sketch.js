function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	ellipse(mouseX, random(windowHeight/2), mouseY , random(100));
	loadPixels();
	for (var i = 0; i < pixels.length; i++) {
	  // var sect = random(pixels.length);
	  a = [0,1]
	  var rand = a[Math.floor(Math.random() * a.length)];
	  if (rand) {
	  pixels[i] = pixels[i-200];
	  // print(pixels[i]);
	  }
	}
	updatePixels();
}