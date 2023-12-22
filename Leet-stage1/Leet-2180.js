// var countEven = function(num) {
//     let arry = []
//     for(let i = 0 ; i <= num ; i++){
//         if(i!==0){
//             arry.push(i)
            
//         }
        
//     }
    
//     const data = arry.toString().split("")
//     for(let i = 0 ; i < data.length; i++){

//             const count = 0
//         for(let j = i+1; j < data.length; j++){
//             if(data[i]+ data[j]%2 === 0)count ++
//         }
//          return count
//     }
// };
// console.log(countEven(30))
var digitSum = function (num){
    let numStr = num.toString()
    console.log(numStr)
    let numArr = numStr.split("")
    console.log(numArr)
    let sum = numArr.reduce((a,b) => a + Number(b),0)
    console.log(sum)
    return sum
}

var countEven = function (num){
    let count = 0
    for (let i = 1; i <= num; i++){
        if(digitSum(i)%2 == 0) count ++
       
    }
    return count
}
console.log(countEven(30))