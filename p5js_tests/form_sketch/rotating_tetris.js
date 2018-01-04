function setup() {
    createCanvas(windowWidth, windowHeight);
    background(50, 50, 50);
    for (var i = 0; i < 100; i++) {
        tetris_shape_left(random(windowWidth), random(windowHeight), 50, 50);
        translate(windowWidth / 2, windowHeight / 2);
        rotate(PI / 3.0);
        tetris_shape_right(random(windowWidth), random(windowHeight), 50, 50);
    }

}

function draw() {

}

function tetris_shape_left(posX, posY, shapesizeX, shapesizeY) {
    cube_width = shapesizeX / 2;
    cube_height = shapesizeY / 2;
    rect(posX, posY, cube_width, cube_height);
    rect(posX + cube_width, posY, cube_width, cube_height);
    rect(posX + cube_width, posY + cube_height, cube_width, cube_height);
}

function tetris_shape_right(posX, posY, shapesizeX, shapesizeY) {
    cube_width = shapesizeX / 2;
    cube_height = shapesizeY / 2;
    rect(posX, posY, cube_width, cube_height);
    rect(posX + cube_width, posY, cube_width, cube_height);
    rect(posX, posY + cube_height, cube_width, cube_height);
}