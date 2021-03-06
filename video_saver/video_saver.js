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

// taken from pr.js docs
var x, y;

function setup() {
    createCanvas(300, 200);
    // Starts in the middle
    x = width / 2;
    y = height;
}

function draw() {
    background(200);

    // Draw a circle
    stroke(50);
    fill(100);
    ellipse(x, y, 24, 24);

    // Jiggling randomly on the horizontal axis
    x = x + random(-1, 1);
    // Moving up at a constant speed
    y = y - 1;

    // Reset to the bottom
    if (y < 0) {
        y = height;
    }
}