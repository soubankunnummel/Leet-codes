// var checkString = function(s) {
//     // let text  = s.split("")
//     let a = s.indexOf("a")
//     let b = s.indexOf("b")
//     console.log( s.indexOf("b"))
//     if(a === -1){
//         return true
//     }
//     if(b === -1){
//         return true
//     }
//     if(a<b){
//         return true
//     }
//     return false
//     // for(let i = 0 ; i < text.length; i++){
//     //     console.log(text.indexOf(text[i] === "a" ) )
//     //     if( text.indexOf(text[i] === "a" ) -1  < text.indexOf(text[i] === "b") +1 ){
            
//     //         return true

//     //     }
       
//     // }
//     // return false
    
// };




// const  s = "baaabbb"
// console.log(checkString(s))



function checkString(s) {

    let firstB = -1;

    for (let i = 0; i < s.length; i++) {

      if (s[i] === 'b') {
      
        if (firstB === -1) {
          firstB = i;
        }
      }

      else if (s[i] === 'a') {

        if (firstB !== -1) {
          return false;
        }
      }
    }
    
    return true;
  }
  


  console.log(checkString("aaabb")); 

  