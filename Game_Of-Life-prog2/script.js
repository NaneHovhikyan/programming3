var socket = io()

var side = 35;





function setup(){
    frameRate(5)
     createCanvas(20 * side, 20 * side);
      
}


// function AddCarrot() {
//     socket.on("addCarrot",)
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



function nkarel(matrix){
       for(var y = 0; y < matrix.length; y++){
            for(var x = 0; x < matrix[y].length;x++){
                var toBot = side - side * 0.2

                     if(matrix[y][x] == 1){
                        fill("orangered")
                        rect(x  * side ,y * side , side , side)
                        text('🥕', x * side, y * side + toBot);

                     }else if(matrix[y][x] == 2){
                         fill("white")
                     rect(x  * side ,y * side , side , side)
                     text('🐇', x * side, y * side + toBot);

                  }else if(matrix[y][x] == 3){
                    fill("#acacac")
                    rect(x  * side ,y * side , side , side)
                    text('🐺', x * side, y * side + toBot);

             }else if(matrix[y][x] == 4){
                fill("orange")
                rect(x * side, y * side, side, side);
                text('🦁', x * side, y * side + toBot);
         }
         else if(matrix[y][x] == 5){
            fill("black")
            rect(x * side, y * side, side, side);
            text('🦹‍♂️', x * side, y * side + toBot);
     }
             else {
                          fill("gray")
                        rect(x  * side ,y * side , side , side)

                     }
            }
       }
}  


setInterval(
    function(){
        socket.on("send matrix",nkarel)
    },1000
)