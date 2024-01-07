// var isValid = function(s) {
//     let status = false
    
//     const arr = s.split("")
//     arr.map((x) => x === "(")
//     console.log(arr)
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === arr[i+1]) {
        
//         status = true
//         }
//     }
//     return status

// }
// console.log(isValid("()"))
 
function isValid(s) {
    const stack = [];
    const pairs = { '(': ')', '[': ']', '{': '}' };
  
    for (let char of s) {
      if (char in pairs) {
        stack.push(char);
      } else {
        if (stack.length === 0 || pairs[stack.pop()] !== char) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
    console.log(isValid("()"))