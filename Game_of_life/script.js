var s
var size = 20
var food

function setup(){
    createCanvas(600,600)
    s = new Snake()
    frameRate(10)                                                        //Aragutyun
    pickLocation()                                                                            
}

function pickLocation(){
    var cols = floor(width/size)
    var rows = floor(height/size)
    food = createVector(floor(random(cols)), floor(random(rows)))       //Creates a new p5.Vector (the datatype for storing vectors)
    food.mult(size)   
}

function draw(){
    background(51)
    s.update()
    s.show()
    
    if(s.eat(food)){
    pickLocation() 
    }
    
    fill(255, 0, 255)
    rect(food.x, food.y, size, size)
}

function keyPressed(){
    if (keyCode === UP_ARROW){
      s.dir(0, -1);                                                      //moves 0 along x and -1 (up) along y axis
    }
     else if (keyCode === DOWN_ARROW){
      s.dir(0, 1);
    } 
    else if (keyCode === RIGHT_ARROW){
      s.dir(1, 0);
    } 
    else if (keyCode === LEFT_ARROW){
      s.dir(-1, 0);
    }
}