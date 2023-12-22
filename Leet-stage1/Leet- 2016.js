var maximumDifference = function(nums) {
    if (nums.length < 2) {
        return -1;
    }

    let maxDifference = -1;
    let minElement = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > minElement) {
            
            maxDifference = Math.max(maxDifference, nums[i] - minElement);
        } else {
            
            minElement = nums[i];
        }
    }

    return maxDifference;
};


// Example usage:
const nums2 = [9, 4, 3, 2];
console.log(maximumDifference(nums2)); // Output: -1


