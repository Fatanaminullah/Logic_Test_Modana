//Nomor 1
var triangleOne = (x) => {
    y = ""
    for(let i = 0;i <= x; i++){
        for(let j = 0 ;j <= (x -i) ;j++){
            y += " "
        }
        for(let k = 0;k <= i-1;k++){
            y += " #"
        }
        y += "\n" 
    }
    console.log("Triangle : ");
    
    console.log(y);
    

}

triangleOne(6)

//Nomor 2
var triangleTwo = (y) => {
    var x = ""
for(let i = 0;i < y; i++){
    if(i == 0 || i == 1 || i == y - 1){
        for(j = y;j > i; j--){
            x += " "
        }
        for(k = 0;k < i + 1;k++){
            x += "# "
        }
        x += "\n"
    }else{
        for(j = y;j > i; j--){
            x += " "
        }
        for(k = 0;k < i + 1;k++){
            if(k == 0 || k == i){
                x += "# "
            }else{
                x += "  "
            }
        }
        x += "\n"
    }
}
console.log("Donut Triangle : ");

console.log(x);

}

triangleTwo(6)


