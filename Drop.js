class Drop {

    constructor(position) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    this.position = position.copy();
    this.lifespan = 255;}

    run() {
    this.update();
    this.display();
    }

    fall() {
    return this.position.y + 6 > height;
    }

    applyForce(force) {
    this.acceleration.add(force);
    }

    update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1;
    this.acceleration.set(0, 0);
    }

    display() {
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    ellipse(this.position.x, this.position.y-6, 2, 6);
    }

    isDead() {
    return this.lifespan < 0;
    }
}



