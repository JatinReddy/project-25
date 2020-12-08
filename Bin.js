class Bin {
    constructor(x,y,width,height) {
        var options = {
            isStatic : true,
            restitution : 0 
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
        

        this.image = loadImage("dustbingreen.png");

       
    }
    
        
        display(){
            
            var pos = this.body.position;
            push()
            imageMode(CENTER);
            translate(pos.x,pos.y);
            image(this.image,0,-90,200,200);
    
        }
    
    }
