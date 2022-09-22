let Living_Creature = require("./Living_Creature")


module.exports = class Verjin extends Living_Creature{
    constructor(x, y) {
        super(x,y)
        this.energy = 9;
        this.multiply = 0
        this.directions = [];
    }

   

    mul() {
        this.multiply++;
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.random() * emptyCells.length];

        console.log(emptyCells);
        if (newCell && this.multiply >= 15) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;

            var verjin = new Verjin(newX, newY);
            VerjinArr.push(verjin);
            this.multiply = 0;
        }
    }

    move() {
        this.energy--
        var emptyCells = super.chooseCell(0)
        var newCell = emptyCells[Math.random() * emptyCells.length];

        if (newCell && this.energy >= 0) {
            console.log(newCell)
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
        else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }

    eat() {
        var emptyCells = super.chooseCell(4)
        var newCell = emptyCells[Math.random() * emptyCells.length];

        if (newCell) {
            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in bombArr) {
                if (newX == bombArr[i].x && newY == bombArr[i].y) {
                    bombArr.splice(i, 1)
                    break
                }
            }
        }
        else {
            this.move()
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in verjinArr) {
            if (this.x == verjinArr[i].x && this.y == verjinArr[i].y) {
                verjinArr.splice(i, 1);
                break;
            }
        }
    }
}