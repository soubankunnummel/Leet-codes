// var smallestEvenMultiple = function(n) {
//    let larger = Math.max(2,n)
//    let mulltiple = larger
//    if(mulltiple % 2 === 0 && mulltiple % n === 0){

//    }
// }

// Function to find the smallest multiple of both 2 and n
function smallestEvenMultiple(n) {
    
    let larger = Math.max(2, n);
    
    console.log(larger)
    let multiple = larger;
   
    while (true) {
      
      if (multiple % 2 === 0 && multiple % n === 0) {
       
        return multiple;
      } else {
        
        multiple += larger;
      }
    }
  }
  
const n = 8
console.log(smallestEvenMultiple(n))