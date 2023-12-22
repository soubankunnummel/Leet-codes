var countHillValley = function(nums) {
    if(nums.length < 3){
        return 0
    }
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) || (nums[i] < nums[i - 1] && nums[i] < nums[i + 1])) {
            count++;
           
           
        }
        
        
    }
    return count
    
};
const nums = [2,4,1,1,6,5]
console.log(countHillValley(nums))