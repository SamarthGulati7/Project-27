class Rope{

    constructor(body1,body2,offsetX){
    
    this.offsetX=offsetX;

    var options={
    bodyA: body1,
    bodyB: body2,
    pointB: {x: this.offsetX, y: 0} 

    }

    this.rope=Matter.Constraint.create(options);
    World.add(world,this.rope);
    }
    
    display(){
    
    var A= this.rope.bodyA.position;
    var B= this.rope.bodyB.position;
    strokeWeight(4);
    stroke("grey");
    line(A.x,A.y,B.x+this.offsetX,B.y);
    
    }
    
    }