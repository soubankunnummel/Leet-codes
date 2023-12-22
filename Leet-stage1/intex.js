var reversePrefix = function(word, ch) {
     if(word.includes(ch)){
         const index = word.indexOf(ch)
        
            for (let i = 0 ; i <= index ; i ++){
                if(i === index ){
                    return word.substring(0, index+1).split("").reverse().join("") + word.substring(index + 1)
                }
            }
     }
  

    
 
return word
    
};

const word = "abcdefd"
const  ch = "v"
console.log(reversePrefix(word,ch))