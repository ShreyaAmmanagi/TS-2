class circles{
    constructor(x,y,radius){
     this.body = Bodies.circle(x,y,radius,{density:0.0001,restitution:0.2});
     this.radius = radius;
     this.box = 255
     World.add(world,this.body)
    }
    display(){
       if(this.body.speed<3){
        var body1 = this.body.position
        ellipseMode(RADIUS);
        ellipse(body1.x,body1.y,this.radius)
       }
        else{
            World.remove(world,this.body)
            push()
            this.box = box-5
            tint(255,this.box);
            pop()
        }
    }
}