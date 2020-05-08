class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            bodyB : pointB,
            stiffness : 0.04,
            length : 10
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        fill("black");
        line(pointA.x,pointA.y,point.x,pointB.y);
    }
}