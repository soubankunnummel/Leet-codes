var finalString = function(s) {

    let arr = []
   
    for (let x of s) {
        if(x === "i"){
            arr.reverse()
        }else{
            arr.push(x)
        }
        
    }
    return arr.join("")

};
console.log(finalString("striing"))