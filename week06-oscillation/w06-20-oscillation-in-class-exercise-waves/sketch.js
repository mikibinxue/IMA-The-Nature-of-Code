var RESOLUTION = 3;

function setup() {
  createCanvas(800, 600);
  background(0);
  noStroke();
  fill(200,120,10,70);
}

function draw() {
  background(0);
  
  push();
  blendMode(ADD);
  drawWave(-30, 8, 0.010);
  drawWave(-5, 11, 0.011);
  drawWave(50, 15, 0.012);
  pop();
}

function drawWave(y, diaMax, value) {
  push();
  translate(0, y);

  var freq, amp;
  for (var x = 0; x < width; x += RESOLUTION) {

    // sin for xOffset
    freq = frameCount * value;
    amp = mouseX;
    var sinXOffset = sin(freq) * amp;

    // sin for amp
    freq = (frameCount) * value;
    amp = mouseY/2;
    var sinAmp = noise(freq) * amp;

    // sin for freq
    freq = frameCount * value;
    amp = 0.01;
    var sinFreq = sin(freq) * amp;

    // main sine wave
    freq = (x + sinXOffset) * sinFreq;
    amp = sinAmp;
    var sinValue = sin(freq) * amp;

    var y = height / 2 + sinValue;
    var dia = random(1, diaMax);

    ellipse(x, y, dia, dia);
    ellipse(x, y, dia/2, dia/2);
    ellipse(x, y, dia/3, dia/3);
  }

  pop();
}