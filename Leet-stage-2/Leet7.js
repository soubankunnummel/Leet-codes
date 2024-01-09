var reverse = function(x) {
    const arr = x.toString().split("")

   const nums =  arr.filter((x) => x != "-" && x != "0")



   console.log("first,",nums)
//     for(let i = 0; i< arr.length; i ++){
        
//         if(arr[i] === "-"){
//             i++
//             const  arr2 = arr.reverse().join("")
//             return arr2
             
//         }
        
// }
    let newar = nums.reverse()
    if(arr.includes("-")){
        
        newar.unshift("-")
    }
   const result =  newar.join("")
  
    return result
}

console.log(reverse(-345))
