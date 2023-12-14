var digitCount = function(num) {
    for (let i = 0; i < num.length; i++) {
        let digit = parseInt(num[i])
        let count = 0
        for (let j = 0; j < num.length; j++) {
            let temp = parseInt(num[j])
            if(temp === i) {
                count ++
            } 
        }
        if(digit !== count){
            return false
        }
    }
    return true
   
};

const  num = "030"
console.log(digitCount(num))