const btn = document.querySelector('button'),
    chunks = [];

function record() {
    chunks.length = 0;
    let stream = document.querySelector('canvas').captureStream(30),
        recorder = new MediaRecorder(stream);
    recorder.ondataavailable = e => {
        if (e.data.size) {
            chunks.push(e.data);
        }
    };
    recorder.onstop = exportVideo;
    btn.onclick = e => {
        recorder.stop();
        btn.textContent = 'start recording';
        btn.onclick = record;
    };
    recorder.start();
    btn.textContent = 'stop recording';
}

function exportVideo(e) {
    var blob = new Blob(chunks);
    var vid = document.createElement('video');
    vid.id = 'recorded'
    vid.controls = true;
    vid.src = URL.createObjectURL(blob);
    document.body.appendChild(vid);
    vid.play();
}
btn.onclick = record;


var fingers;

function setup() {
    createCanvas(710, 400);
    // specify multiple formats for different browsers
    fingers = createVideo(['assets/fingers.mp4',
        'assets/fingers.webm'
    ]);
    fingers.hide(); // by default video shows up in separate dom
    // element. hide it and draw it to the canvas
    // instead
}

function draw() {
    background(150);
    image(fingers, 10, 10); // draw the video frame to canvas
    filter('GRAY');
    image(fingers, mouseX, mouseY); // draw a second copy to canvas
}

function mousePressed() {
    fingers.loop(); // set the video to loop and start playing
}