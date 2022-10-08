var socket = io();


var side = 35;

w = "spring";


function setup(){
    // frameRate(5)
     createCanvas(20 * side, 20 * side);

     
}


function AddCarrot() {
    socket.emit("addCarrot");
}
function AddRabbit() {
    socket.emit("addRabbit");
}
function AddWolf() {
    socket.emit("addWolf");
}

function AddLion() {
    socket.emit("addLion");
}

function AddVerjin() {
    socket.emit("addVerjin");
}

function WEATHER(wasd){
    w = wasd;
}

socket.on ("send datas", function(counts){
    // console.log(counts);
    document.getElementById("grass").innerHTML = counts.grass;
    document.getElementById("grassEater").innerHTML = counts.grassEater;
    document.getElementById("predator").innerHTML = counts.predator;
    document.getElementById("bomb").innerHTML = counts.bomb;
    document.getElementById("verjin").innerHTML = counts.verjin;
})





// socket.on("changeWeather", function(exanak){
//     w = exanak;
// })
    
    

function nkarel(matrix,w){
       for(var y = 0; y < matrix.length; y++){
            for(var x = 0; x < matrix[y].length;x++){
                var toBot = side - side * 0.2
                     if(matrix[y][x] == 1){
                        if(w == "spring"){
                            fill("#1be357")
                            rect(x  * side ,y * side , side , side)
                            text('🌿', x * side, y * side + toBot);
                        }
                        else if(w == "summer"){
                            fill("orangered")
                        rect(x  * side ,y * side , side , side)
                        text('🥕', x * side, y * side + toBot);
                        }
                        else if(w == "autumn"){
                            fill("#ebe310")
                        rect(x  * side ,y * side , side , side)
                        text('🍁', x * side, y * side + toBot);
                        }
                        else if(w == "winter"){
                            fill("#10ebdc")
                        rect(x  * side ,y * side , side , side)
                        text('❄️', x * side, y * side + toBot);
                        }
                     }


                     else if(matrix[y][x] == 2){
                         if(w == "spring"){
                                fill("white")
                     rect(x  * side ,y * side , side , side)
                     text('🐇', x * side, y * side + toBot); 
                         }
                         else if(w == "summer"){
                            fill("#717a7a")
                            rect(x  * side ,y * side , side , side)
                            text('🐰', x * side, y * side + toBot); 
                         }
                         else if(w == "autumn"){
                            fill("#717a7a")
                            rect(x  * side ,y * side , side , side)
                            text('🐰', x * side, y * side + toBot); 
                         }
                         else if(w == "winter"){
                            fill("white")
                            rect(x  * side ,y * side , side , side)
                            text('🐇', x * side, y * side + toBot); 
                         }
                        }
                        
                        


                        else if(matrix[y][x] == 3){
                            if(w == "spring"){
                                fill("#acacac")
                                rect(x  * side ,y * side , side , side)
                                text('🐺', x * side, y * side + toBot);
                         }
                         else if(w == "summer"){
                            fill("#acacac")
                    rect(x  * side ,y * side , side , side)
                    text('🐺', x * side, y * side + toBot); 
                         }
                         else if(w == "autumn"){
                            fill("#acacac")
                    rect(x  * side ,y * side , side , side)
                    text('🐺', x * side, y * side + toBot);
                         }
                         else if(w == "winter"){
                            fill("#acacac")
                    rect(x  * side ,y * side , side , side)
                    text('🐺', x * side, y * side + toBot);
                         }
             } 

             else if(matrix[y][x] == 4){
                 if(w == "spring"){
                    fill("orange")
                rect(x * side, y * side, side, side);
                text('🦁', x * side, y * side + toBot); 
                 }
                 else if(w == "summer"){
                    fill("orange")
                    rect(x * side, y * side, side, side);
                    text('🦁', x * side, y * side + toBot);
                 }
                 else if(w == "autumn"){
                    fill("orange")
                    rect(x * side, y * side, side, side);
                    text('🦁', x * side, y * side + toBot);
                 }
                 else if(w == "winter"){
                    fill("#1c2bc9")
                    rect(x * side, y * side, side, side);
                    text('💤', x * side, y * side + toBot);
                 }
                
         }
         else if(matrix[y][x] == 5){
             if(w == "spring"){
                fill("#c91c59")
            rect(x * side, y * side, side, side);
            text('👩‍🌾', x * side, y * side + toBot); 
             }
             else if(w == "summer"){
                fill("#b875eb")
            rect(x * side, y * side, side, side);
            text('👨‍🌾', x * side, y * side + toBot); 
             }
             else if(w == "autumn"){
                fill("#ebcf75")
            rect(x * side, y * side, side, side);
            text('👨‍🌾', x * side, y * side + toBot); 
             }
             else if(w == "winter"){
                fill("#ffc0cb")
            rect(x * side, y * side, side, side);
            text('🤦‍', x * side, y * side + toBot); 
             }
            
     }
             else {
                          fill("gray")
                        rect(x  * side ,y * side , side , side)

                     }
            }
       }

      
}

socket.on('send matrix', (matrix)=>{
    nkarel(matrix,w);
})