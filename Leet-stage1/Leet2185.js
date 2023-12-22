var prefixCount = function(words, pref) {
    let count = 0
    for(let i = 0; i < words.length; i++){
        const word = words[i]
        const newWord = word.slice(0, pref.length);

        console.log("first")
        if(newWord === pref)count ++
    }
    
    
    return count 
    
    
    
};
 const words = ["leetcode","win","loops","success"], pref = "code"
console.log(prefixCount(words,pref))