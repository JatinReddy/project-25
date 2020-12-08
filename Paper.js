class Paper {
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restituition : 0.8,
            friction:0.5,
            density : 1.2
            
        }
            
       
        this.body = Bodies.circle(x,y,r/2,options);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("paper.png");
        
        
       
    }
    display (){
        var paperpos = this.body.position;


        push();
        fill("pink");
        translate(paperpos.x,paperpos.y);
        strokeWeight(3);
        imageMode(CENTER);
        image(this.image,10,5,this.r,this.r);
        pop();
    }
}