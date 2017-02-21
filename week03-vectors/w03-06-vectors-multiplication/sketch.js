// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 20 2017

/**
 * Please have a look at the book page 54.
 * Static vs. Non-Static Functions
 * */


function setup() {
  createCanvas(500, 500);

  var vector = createVector(3, 1);
  var newVector = p5.Vector.mult(vector, 3); // static
  vector.mult(3); // non-static. the values of vector1 will change.

  printVector(newVector);
  printVector(vector);
}


function draw() {
  noLoop();
}


function printVector(v) {
  print("(" + v.x + ", " + v.y + ")");
}