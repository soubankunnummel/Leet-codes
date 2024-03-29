
var containsDuplicate = function(nums) {
    const s = new Set(nums);
    // s.size means if aryy have so many multiple numbers it will count only once eg:- 
    // [1,2,3,4,5,3,4,5] in this arry 3,4,5 repeted so this Set() methord only take 
    // like this
    // 0:1
    // 1:2
    // 2:3
    // 3:4
    // 4:5
    // 5:6
    

    console.log(s)
    console.log(s.size)
     return s.size !== nums.length


};
console.log( containsDuplicate([1,2,3,4,5,5,5,6]))