var alternateDigitSum = function(n) {
    let str = "" + n

    const arry = str.split("")
    
    let result = 0
    let sign = 1
    for(let i = 0 ; i < arry.length; i++){
   
       result += sign * Number(arry[i])
        sign *= -1
    }
    return result
    

};

console.log(alternateDigitSum(111))