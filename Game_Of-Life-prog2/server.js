var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


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


function createObject(matrix){
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




// function AddCarrot() {
//     for (let i = 0; i < 1; i++) {
//         let x = Math.floor(random(size));
//         let y = Math.floor(random(size));
//         matrix[y][x] = 1;
//     }
//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 let gr = new Grass(x, y);
//                 grassArr.push(gr);
//             }

//         }
//     }
//      io.sockets.emit("addCarrot",AddCarrot)
// }


// function AddRabbit() {
//     for (let i = 0; i < 1; i++) {
//         let x = Math.floor(random(size));
//         let y = Math.floor(random(size));
//         matrix[y][x] = 2;
//     }
//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 2) {
//                 let eater = new GrassEater(x, y);
//                 grassEaterArr.push(eater);
//             }

//         }
//     }
// }
// function AddWolf() {
//     for (let i = 0; i < 1; i++) {
//         let x = Math.floor(random(size));
//         let y = Math.floor(random(size));
//         matrix[y][x] = 3;
//     }
//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 3) {
//                 let utox = new Predator(x, y);
//                 predatorArr.push(utox);
//             }

//         }
//     }
// }

// function AddLion() {
//     for (let i = 0; i < 1; i++) {
//         let x = Math.floor(random(size));
//         let y = Math.floor(random(size));
//         matrix[y][x] = 4;

//     }
//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 4) {
//                 let bomb = new Bomb(x, y);
//                 bombArr.push(bomb);
//             }

//         }
//     }
// }

// function AddVerjin() {
//     for (let i = 0; i < 1; i++) {
//         let x = Math.floor(random(size));
//         let y = Math.floor(random(size));
//         matrix[y][x] = 5;

//     }
//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 5) {
//                 let verjin = new Verjin(x, y);
//                 verjinArr.push(verjin);
//             }

//         }
//     }
// }






io.on("connection", function(){
    createObject(matrix)
})
