class Snow {
    constructor(x,y) {
        var options = {
            isStatic:false
        }

        this.rand = Math.round(random(1,2));
        switch(this.rand) {
        case 1: this.image = loadImage("snow4.webp");
        break;

        case 2: this.image = loadImage("snow5.webp");
        break;

        default: break;
        }

        this.body = Bodies.circle(x,y,30,options);

        World.add(world, this.body);
    }

    update() {
        if(this.body.position.y > height-30) {
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 30, 30);
        pop();
    }
}