var sumOfSquares = function(nums) {
    let result = 0
    for(let i = 0 ;  i <= nums.length ; i++){
        if(nums.length % i === 0 ){
            console.log(nums[i])
           
            result += nums[i-1] * nums[i-1]
            
            
            
        } 

    }
            return result
}