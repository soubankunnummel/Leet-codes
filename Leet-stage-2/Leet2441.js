// // // var findMaxK = function(nums) {

// // //     let maxK = -1;
   
// // //     for (let i = 0; i < nums.length; i++) {
// // //         for (let j = 0; j < nums.length; j++) {
           
// // //             if(Math.abs(nums[i]) === Math.abs(nums[j]) && i !== j ){
// // //                 maxK = Math.max(maxK, Math.abs(nums[i]));
// // //             }
            
// // //         }
// // //     }

// // //     return maxK
       

        
// // //     }

// // // const nums  = [14,33,40,-33,8,-24,-42,30,-18,-34]
// // // console.log(findMaxK(nums))

// // var findMaxK = function(nums) {
// //     let maxK = -1;

// //     for (let i = 0; i < nums.length; i++) {
// //         if(nums[i]<0) {
// //             maxK = -1
// //         }
// //         for (let j = 0; j < nums.length; j++) {
// //             if (Math.abs(nums[i]) === Math.abs(nums[j]) && i !== j && nums[i] > 0) {
// //                 maxK = Math.max(maxK, Math.abs(nums[i]));
// //             }
// //         }
// //     }

// //     return maxK;
// // };

// // const nums = [-9,-43,24,-23,-16,-30,-38,-30]
// // console.log(findMaxK(nums));


var findMaxK = function(nums) {
    let maxk = -1
    let set  = new Set (nums)
    for (let num of nums) {
        console.log(set.has(-num))
        if(num > 0 && set.has(-num)){
            maxk = Math.max(maxk, num)
        }
        
    }
    return maxk
}

const nums = [14, 33, 40, -33, 8, -24, -42, 30, -18, -34];
console.log(findMaxK(nums))


