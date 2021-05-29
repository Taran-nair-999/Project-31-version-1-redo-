class Partical {
    constructor(x, y, r) {
        var options = {restitution=0.3}
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    this.color(random (0,255), random (0,255), random (0,255))
    World.add(world, this.body);

}
    display() {
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        elipseMode(CENTER);
        fill("white");
        elipse(pos.x, pos.y, this.r, this.options);
        pop();
    }

}
