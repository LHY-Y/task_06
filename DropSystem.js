class DropSystem {
    constructor(position) {
        this.drops = [];
    }

    addDrop() {
    let start = createVector(random(width), 0);
    this.drops.push(new Drop(start));
    }

    run() {
    for (let i = this.drops.length-1; i >= 0; i--) {
    let p = this.drops[i];
    p.run();
    if (p.isDead()) {
      this.drops.splice(i, 1);
    }
  }       
    }

    applyForce(force) {
    for (let i = 0; i < this.drops.length; i++) {
    this.drops[i].applyForce(force);
  }
}

}