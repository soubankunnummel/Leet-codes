// var minimumOperations = function(nums) {
 
    
//     let oprationCount = 0
//     let stage = [] 
//     // console.log(   ...nums.filter((a) => a > 0))
//     let x = Math.min( ...nums.filter((a) => a > 0))
    
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] === 0) continue
//         stage = nums[i] - x
//         oprationCount ++
//         if(nums[i] === 0) continue
//         x = Math.min( stage.filter((a) => a > 0))
//         stage = nums[i] - x
//         console.log(stage)
//     }
//     return oprationCount
   
// };

// const nums = [1,5,0,3,5]

// console.log(minimumOperations(nums))

function minimumOperations(nums) {
    // Initialize a set to store the unique elements
    let unique = new Set();
    
    // Iterate over the array
    for (let num of nums) {
        // If the element is positive, add it to the set
        if (num > 0) {
            unique.add(num);
            console.log(unique.add(num))
      }
    }
    // Return the size of the set as the answer
    return unique.size;
}
const nums = [1,5,8,0,3,5]
  
console.log(minimumOperations(nums))  