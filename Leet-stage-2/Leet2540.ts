// var getCommon = function(nums1, nums2) {
//     const newArr = new Set(nums1)

//     console.log(newArr)
    
//     const comen = nums1.filter((x) => nums2.includes(x))
//     const smalest = Math.min(...comen)
//     console.log(smalest)
//     console.clear()

// // 
//   return  smalest 
// }
// console.log(getCommon(nums1 = [1,2,3], nums2 = [2,4]))

var getCommon = function (nums1: number[], nums2: number[]) {
  var set = new Set(nums1)

  var commen = -1 
  for (const num of nums2) {
    if(set.has(num) && (commen === -1 || num < commen)){
      commen = num
    }
    
  }
  return commen
}
const nums1 = [1,2,3], nums2 = [2,4]
console.log(getCommon(nums1,nums2))