var repeatedCharacter = function(s) {
    let seen = []
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if(seen.includes(c)){
            return c
        }else{
             seen.push(c)
        }
      
    }
    return null
};
const s = "abda"
console.log(repeatedCharacter(s))