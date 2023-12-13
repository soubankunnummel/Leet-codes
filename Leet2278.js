var percentageLetter = function(s, letter) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        console.log(s[i])
        if(s[i] === letter)  count++
        
    }
    if(count !== 0){
      const totla =  count/s.length*100
     return  Math.floor(totla)
    }
    return 0
};
const s = "sgawtb", letter = "s"

console.log(percentageLetter(s,letter))