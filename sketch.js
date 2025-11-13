let system;

function setup() {
  createCanvas(720, 400);
  system = new DropSystem(createVector(width / 2, height/5*2));
}

function draw() {
  background(51);

  let gravity = createVector(0, 0.03);
  system.applyForce(gravity); 

  if (mouseIsPressed) {
    let wind = p5.Vector.sub(createVector(mouseX, mouseY), width/2, 0);
    wind.normalize();
    wind.mult(0.05);
    system.applyForce(wind);
  } 

  for (let p of system.drops) {
    if (p.fall()) {
      let rebound = createVector(0, p.velocity.y*(-1.2));
      p.applyForce(rebound);
    }
  }

  system.addDrop();
  system.run();
}