class Snake{
    constructor(x,y,xspeed,yspeed){
    this.x = 0
    this.y = 0
    this.xspeed = 1
    this.yspeed = 0
    this.total = 0
    this.tail = []                        

    this.eat = function(position){
        var d = dist(this.x, this.y, position.x, position.y)       //Calculates the distance between two points, in either two or three dimensions
        if(d < 1){
            this.total++
            return true
        }
        else{
            return false
        }
    }
    
    this.dir = function(x, y){
        this.xspeed = x
        this.yspeed = y
    }
   
    
    this.update = function(){
        if(this.total === this.tail.length){
            for(var i = 0; i<this.tail.length-1; i++){
                this.tail[i] = this.tail[i+1]
            }
            
        }

        this.tail[this.total-1] = createVector(this.x, this.y)

        this.x = this.x + this.xspeed * size
        this.y = this.y + this.yspeed * size

        this.x = constrain(this.x, 0, width-size)                  //Constrains a value between a minimum(0) and maximum(width) value
        this.y = constrain(this.y, 0, height-size)                 //Սահմանափակում է արժեքը նվազագույն և առավելագույն արժեքների միջև
    }

    this.show = function(){
        fill("yellow");
        for (let i = 0; i < this.tail.length; i++){
          rect(this.tail[i].x, this.tail[i].y, size, size);
        }
        rect(this.x, this.y, size, size);
        }   
    }
}