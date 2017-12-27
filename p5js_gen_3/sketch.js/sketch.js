var img;
function preload() {
  img = loadImage("/assets/Round.jpg");
}

function setup() {
	
	  createCanvas(img.width,img.height);

	}
	
	function draw() {
		image(img, 0, 0);
		var d = pixelDensity();
	  //   var halfImage = img.width * img.height * 0.3;
		loadPixels();
		for (var i = 0; i < pixels.length; i++) {
		  // var sect = random(pixels.length);
		  a = [0,1]
		  var rand = a[Math.floor(Math.random() * a.length)];
		  if (rand) {
		  pixels[i] = pixels[i-mouseX*mouseY];
		  // print(pixels[i]);
		  }
		}
		updatePixels();
		// 
		// var halfImage = 0.1 * (img.width * d * mouseX) * (img.height * d);
	}