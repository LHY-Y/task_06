let system;

function setup() {
  createCanvas(720, 400);
  system = new DropSystem(createVector(width / 2, height/5*2));
}

function draw() {
  background(51);

  let gravity = createVector(0, 0.03);
  system.applyForce(gravity);
  
  system.addDrop();
  system.run();
}