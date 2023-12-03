var countElements = function(nums) {
    let count = 0
    for(let i = 0; i < nums.length; i++){
        var small = []
        var larg = []
        let current = nums[i]
       for(let j = 0; j < nums.length; j++){
        if(i === j) continue
        let others =  nums[j]
            if(current> others) small.push(others)
            if(others>current)larg.push(current) 
            
        }
        if(small.length > 0 && larg.length > 0) count ++
    }
    return count

};
console.log(countElements([11,2,15]))