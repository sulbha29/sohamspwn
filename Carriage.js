class Carriage {
    constructor(x,y,width,height){
     var options={
         isStatic:true
 }
     this.body=Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     World.add(world,this.body);
     this.image=loadImage("Images/Carriage.png");

        
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,this.width,this.height);
        if (keyIsDown( UP_ARROW)) {
            this.body.position.y = this.body.position.y-8;
             } else if (keyIsDown(DOWN_ARROW)) {
                this.body.position.y = this.body.position.y+8;
             }
    }
     
}