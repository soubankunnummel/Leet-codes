// var findTheArrayConcVal = function(nums) {
//     console.log(nums.length)
//     let concatenation1 = []
//     let concatenation2 = []

//     for(let i = 0; i < nums.length ; i++){
//         concatenation1.push(nums[i])   
//         concatenation1.push(nums[nums.length-1])
//         nums[i] = "",
//         nums[nums.length -1] = ""
        
//         i ++
//         nums.length --
//         for (let j = i; j < nums.length; j++) {
//            concatenation2.push(nums[j])
//            concatenation2.push(nums[nums.length -1])

//         //    j ++
//         //    nums.length --
//         //    const = fuck you bitch !🫥😡
//         console.log(nums)
//           const r = concatenation1.join("")
//           const s = concatenation2.join("")
//           const num = Number(r)
//           const num2 = Number(s)
          
//           let  total = num + num2
//         //   console.log(num, nums)

//         //    if(nums.length !== 0){
//         //         const last = Number(nums.join(""))
            
//         //     return  total += last
//         //    }
          
//            return total
            
//         }
//         return 

       
//     }
//     return 
// }

// console.log(findTheArrayConcVal([5,14,13,8,12]
//     ))

// var findTheArrayConcVal = function (nums) {
//     let concatnationValue = 0
//     while (nums.length > 0) {
//         let concatenation1 = []
//         let concatenation2 = []
//         let first = nums[0]
//         let last = nums[nums.length - 1]
//         concatenation1.push(first)
//         concatenation1.push(last)
//         nums.splice(0,1)
//         nums.splice(nums.length -1 , 1)

//         for (let i = 0; i < nums.length; i++) {
//             concatenation2.push(nums[i])         
//             concatenation2.push(nums[nums.length - 1,1])
//         }
//         const str1 = concatenation1.join("")
//         const str2 = concatenation2.join("")
//         const num1 = Number(str1)
//         const num2 = Number(str2)
//         concatnationValue += num1 + num2
//     }
//     return concatnationValue
// }

function findTheArrayConcVal(nums) {
    let concatValue = 0;
  
    while (nums.length > 0) {
      if (nums.length > 1) {
        
        const concatenatedValue = p(nums[0].toString() + nums[nums.length - 1].toString());
        concatValue += concatenatedValue;
  
        
        nums.shift();
        nums.pop();
      } else {
        
        concatValue += nums[0];
  
        
        nums.pop();
      }
    }
  
    return concatValue;
  }
console.log(findTheArrayConcVal([5,14,13,8,12]))