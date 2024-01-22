var isFascinating = function(n) {
    let num1 = 2 * n
    let str1 = num1.toString()
    let num2 = 3 * n
    let str2 = num2.toString()
    
    const  concatenate = str1.concat("", str2, n)
    
   if( concatenate.match(/^(?!.*(.).*\1)[1-9]{9}$/ )){
       return true
   }
    else {
        return false
    }
    
}