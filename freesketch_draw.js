var setup = function() {
    createCanvas(1024, 1280);
}

var draw = function() {        
    var rand1 = random(100);
    var rand2 = random(width);
    fill(rand1);
    rect(0, rand1, width, rand2);
}