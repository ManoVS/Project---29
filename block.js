class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1.0,
            'friction':1.2,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(CENTER);
        fill(this.color)
        rect(0, 0, this.width, this.height);
        pop();
      }
}