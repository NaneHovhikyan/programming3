let LivingCreature = require("./LivingCreature")


module.exports = class Grass extends LivingCreature{
      constructor(x, y) {
      super(x,y)
           
      }





      mul(){
            this.multiply++
            var emptyCells  =  super.chooseCell(0);
            var newCell = emptyCells[Math.random() * emptyCells.length];


            if(newCell && this.multiply >= 5){
                  var newX = newCell[0];
                  var newY = newCell[1];

                  matrix[newY][newX] = 1;

                  var gr = new Grass(newX,newY); 

                  grassArr.push(gr);

                  this.multiply = 0; 
            }
      }
}