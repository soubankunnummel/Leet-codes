// var findTheLongestBalancedSubstring = function(s) {
//     let str = ''
//     let ans = 0
//     // const firstZeroIndex = s.indexOf('0');
//     // const firstOneIndex = s.indexOf('1');
//     for (let i = 0; i < s.length/2; i++) {
//         console.log( str = '0' + str + '1')
//           str = "0" + str + "1"
//         if(s.includes(str)){
//             console.log("lentjh: ", str.length)
//            ans = str.length
//         }else{
//            return ans
//         }
        
//     }

//     // console.log("tures",tures) 
//     // console.log("falses",falses) 
    
    
// }



// console.log(findTheLongestBalancedSubstring("0011"))





/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    let ans = 0;
    let str = '';
    for(let i = 0; i <= s.length / 2; i++) {
        str = '0' + str + '1';
        if(s.includes(str)) {
            ans = str.length;
        } else {
            return ans;
        }
    }
};


var findTheLongestBalancedSubstring = function(s) {
    let str = ''
    let ans = 0

    for (let i = 0; i < s.length/2; i++) {
        
          str = "0" + str + "1"
        if(s.includes(str)){
        
           ans = str.length
        }else{
           return ans
        }
        
    }

    
    
}