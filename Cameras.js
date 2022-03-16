class Cameras{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    display(){
        strokeWeight(4);
        stroke("gray");
        noFill();
        rectMode(CENTER);
        rect(this.x, this.y, 150, 75)
    }
}