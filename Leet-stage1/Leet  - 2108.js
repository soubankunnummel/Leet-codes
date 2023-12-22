var firstPalindrome = function(words) {
    // const arry = words.map((item) => [item])
    for (const word of words) {
        // console.log(word)
        if(checkPalindrom(word))
        return word
    }
    return ""
};

const checkPalindrom = (words) => {
    for(let i = 0; i <= words.length/2 ; i++){
            if(words[i] !== words[words.length - 1 -i]){
                return false
            }
        }
        return true
}

const  words =  ["notapalindrome","racecar", "apple"]
console.log(firstPalindrome(words))