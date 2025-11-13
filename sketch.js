let system;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, height/5*2));
}

function draw() {
  background(51);

  let gravity = createVector(0, 0.05);
  system.applyForce(gravity);
  
  system.addParticle();
  system.run();
}