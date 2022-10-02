var express = require('express');
const { SocketAddress } = require('net');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");


app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000, () => {
    console.log("run server")
    
});

size = 20




function matrixGenerator(matrixSize,grassCount,grEatCount,predatorCount,bombCount,verjinCount){
    let matrix = [];

    for(let i = 0; i < matrixSize;i++){
        matrix[i] = []
        for(let j = 0; j < matrixSize; j++){
            matrix[i][j] = 0;
        }
    }

    for(let i = 0 ; i < grassCount; i++ ){
            
        let x  = Math.floor(Math.random() * matrixSize)
        let y  = Math.floor(Math.random() * matrixSize)

            if(matrix[y][x] == 0){
                matrix[y][x] = 1;
            }
    }

      for(let i = 0 ; i < grEatCount; i++ ){
            
         let x  = Math.floor(Math.random() * matrixSize)
         let y  = Math.floor(Math.random() * matrixSize)

               if(matrix[y][x] == 0){
                   matrix[y][x] = 2;
               }

    }
    for(let i = 0 ; i < predatorCount; i++ ){
            
         let x  = Math.floor(Math.random() * matrixSize)
         let y  = Math.floor(Math.random() * matrixSize)

               if(matrix[y][x] == 0){
                   matrix[y][x] = 3;
               }

    }
    for(let i = 0 ; i < bombCount; i++ ){
            
      let x  = Math.floor(Math.random() * matrixSize)
      let y  = Math.floor(Math.random() * matrixSize)

            if(matrix[y][x] == 0){
                matrix[y][x] = 4;
            }

 }
 for(let i = 0 ; i < verjinCount; i++ ){
            
  let x  = Math.floor(Math.random() * matrixSize)
  let y  = Math.floor(Math.random() * matrixSize)

        if(matrix[y][x] == 0){
            matrix[y][x] = 5;
        }

}


 return matrix ;     
}



 matrix = matrixGenerator(20,15,20,25,18,20);

 io.sockets.emit("send matrix",matrix)


//arrays 
grassArr = []
grassEaterArr = []
predatorArr = []
bombArr =[]
verjinArr = [] 


//modules
Grass = require("./grass")
GrassEater = require("./grass_eater")
Predator = require("./predator")
Bomb = require("./bomb")
Verjin = require("./verjin")


function createObject(){
    for(var y = 0 ; y < matrix.length ;y++){
        for(var x = 0; x < matrix[y].length;x++){
                       if(matrix[y][x] == 1){
                            var gr = new Grass(x,y)

                            grassArr.push(gr)
                       }else  if(matrix[y][x] == 2){
                          var grEat = new GrassEater(x,y)

                          grassEaterArr.push(grEat)
                     }else  if(matrix[y][x] == 3){
                          var pre = new Predator(x,y)

                          predatorArr.push(pre)
                     }else  if(matrix[y][x] == 4){
                        var boom = new Bomb(x,y)
                        bombArr.push(boom)
                   }else  if(matrix[y][x] == 5){
                    var verjin = new Verjin(x,y)
                    verjinArr.push(verjin)
               }
        }
   }

   io.sockets.emit("send matrix",matrix)

}

function game(){
    for(var i in grassArr){
        grassArr[i].mul()
  
    }

  for (let j in grassEaterArr) {
     grassEaterArr[j].mul()
     console.log("grassEat");
     grassEaterArr[j].eat()
    }

 for (let j in predatorArr) {
     predatorArr[j].mul()
     predatorArr[j].eat()
    }

 for (let j in bombArr) {
   bombArr[j].mul()
   bombArr[j].eat()
   } 
for (let j in verjinArr) {
   verjinArr[j].mul()
   verjinArr[j].eat()
   }

    io.sockets.emit("send matrix",matrix)
   }




setInterval(game,200)  










function addCarrot() {
    for(var i = 0; i < 1; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0){
                matrix[y][x] = 1
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
    }
    io.sockets.emit("addCarrot", addCarrot);
}


function addRabbit() {
    for(var i = 0; i < 1; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0){
                matrix[y][x] = 2
                var eater = new GrassEater(x, y)
                grassEaterArr.push(eater)
            }
    }
    io.sockets.emit("addRabbit", addRabbit);
}


function addWolf() {
    for(var i = 0; i < 1; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0){
                matrix[y][x] = 3
                var utox = new Predator(x, y)
                predatorArr.push(utox)
            }
    }
    io.sockets.emit("addWolf", addWolf);
}





function addLion() {
    for(var i = 0; i < 1; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0){
                matrix[y][x] = 4
                var bomb = new Bomb(x, y)
                bombArr.push(bomb)
            }
    }
    io.sockets.emit("addLion", addLion);
}



function addVerjin() {
    for(var i = 0; i < 1; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0){
                matrix[y][x] = 5
                var verjin = new Verjin(x, y)
                verjinArr.push(verjin)
            }
    }
    io.sockets.emit("addVerjin", addVerjin);
}








io.on("connection", function(socket){
    createObject()
    socket.on("addCarrot",addCarrot)
    socket.on("addRabbit",addRabbit)
    socket.on("addWolf",addWolf)
    socket.on("addLion",addLion)
    socket.on("addVerjin",addVerjin)
});


var statistics = {};

setInterval(function() {
    statistics.grass = grassArr.length
    statistics.grasseater = grassEaterArr.length;
    statistics.predator = predatorArr.length;
    statistics.bomb = bombArr.length;
    statistics.verjin = verjinArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
        console.log("stugel")
    })
})