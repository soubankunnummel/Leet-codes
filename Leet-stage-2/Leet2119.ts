var isSameAfterReversals = function(num) {
    let result 
    const reverse1 = num.toString().split("").reverse().join("")
     const number = Math.round(reverse1)
     console.log(number)
   
     const reverse2:string = number.toString().split("").reverse().join("")
     const number2 = Math.round(reverse2)
    //   console.log(number, number2 )
    if(num === number2) {
        return result = true
    }else{
        result = false
    }
    
    return result
}
console.log(isSameAfterReversals(1800))