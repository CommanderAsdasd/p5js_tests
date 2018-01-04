function preload() {
    loadImage("assets/glitchwall.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (var i = 0; i < 100; i++) {
        // tetris_shape_left(random(windowWidth), random(windowHeight), 50, 50);

        translate(windowWidth / 2, windowHeight / 2);
        rotate(PI / 3.0);
    }
    translate(windowWidth / 2, windowHeight / 2);
    rotate(PI / 3.0);

}

function draw() {
    background(50, 50, 50);
    // for (var i = 0; i < 5; i++) {
    tetris_shape_right(random(windowWidth), random(windowHeight), 50, 50);
    tetris_shape_left(random(windowWidth), random(windowHeight), 50, 50);
    tetris_cube(random(windowWidth), random(windowHeight), 50, 50);
    tetris_stick(random(windowWidth), random(windowHeight), 50, 50);
    posX = posX + random(-1, 1);
    //Reset to the bottom
    if (posY < 0) {
        y = height;
    }
    // }

    frameRate(15);
}

//SHAPE TETRISES

function tetris_shape_left(posX, posY, shapesizeX, shapesizeY) {
    cube_width = shapesizeX / 2;
    cube_height = shapesizeY / 2;
    posY = posY - 0.1;
    rect(posX, posY, cube_width, cube_height);
    rect(posX + cube_width, posY, cube_width, cube_height);
    rect(posX + cube_width, posY + cube_height, cube_width, cube_height);
    rect(posX + cube_width, posY + cube_height * 2, cube_width, cube_height);
    posX = posX + random(-1, 1);
    //Reset to the bottom
    if (posY < 0) {
        y = height;
    }
}

function tetris_shape_right(posX, posY, shapesizeX, shapesizeY) {
    cube_width = shapesizeX / 2;
    cube_height = shapesizeY / 2;
    rect(posX, posY, cube_width, cube_height);
    rect(posX + cube_width, posY, cube_width, cube_height);
    rect(posX, posY + cube_height, cube_width, cube_height);
    rect(posX, posY + cube_height * 2, cube_width, cube_height);
    x = x + random(-1, 1);
    posY = posY - 1;
    // Reset to the bottom
    if (posY < 0) {
        y = height;
    }
}

function tetris_cube(posX, posY, shapesizeX, shapesizeY) {
    cube_width = shapesizeX / 2;
    cube_height = shapesizeY / 2;
    rect(posX, posY, cube_width, cube_height);
    rect(posX + cube_width, posY, cube_width, cube_height);
    rect(posX, posY + cube_height, cube_width, cube_height);
    rect(posX + cube_width, posY + cube_height, cube_width, cube_height);
    posY = posY - 1;
    x = x + random(-1, 1);
    if (posY < 0) {
        y = height;
    }
}

function tetris_stick(posX, posY, shapesizeX, shapesizeY) {
    cube_width = shapesizeX / 2;
    cube_height = shapesizeY / 2;
    rect(posX, posY, cube_width, cube_height);
    rect(posX, posY + cube_height, cube_width, cube_height);
    rect(posX, posY + cube_height * 2, cube_width, cube_height);
    rect(posX, posY + cube_height * 3, cube_width, cube_height);
    posY = posY - 1;
    x = x + random(-1, 1);
    // Reset to the bottom
    if (posY < 0) {
        y = height;
    }
}