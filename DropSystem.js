class DropSystem {
    constructor(position) {
        this.origin = position.copy();
        this.drops = [];
    }

    addDrop() {
    this.drops.push(new Drop(this.origin));
    }

    run() {
    for (let i = this.drops.length-1; i >= 0; i--) {
    let d = this.drops[i];
    d.run();
    if (d.isDead()) {
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