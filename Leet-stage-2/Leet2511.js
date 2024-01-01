// var captureForts = function(forts) {
   
//     // let fortsPosition = forts.indexOf(1)
//     // let positonFree = forts.indexOf(-1)
    
//     // console.log(positonFree - fortsPosition)
//     // if(fortsPosition - positonFree )
//     let positions = [];
//     let posiOfnofort = []
//     let anemy = 0
//     let fort = 0
//     //  let a = new Set(forts)
//     // if(a.has(1)|| a.has(-1))  "not forts and no anemy"
//     for(let i = 0 ; i < forts.length; i++){
      
//         if(forts[i] === 1){
//          fort = parseInt(positions.push(i))
//          return  fort
//         }
//         if(forts[i] === -1){
//           anemy = parseInt( posiOfnofort.push(i))
//           return anemy
//         }
//        for(let j = 0 ; j <fort.length ; j++ ){
//         console.log(fort)
//         if(fort[j] - anemy[j] > fort[j+1] - anemy[j+1]){
//             return fort[j] - anemy[j]
//         }
//         else{
//             fort[j+1] - anemy[j+1]
//         }
//        }

//         // if(posiOfnofort[0]-positions[0] > posiOfnofort[0] - positions[1]){
//         //     return posiOfnofort[0]-positions[0]
//         // }else{
//         //     posiOfnofort-positions[1]
//         // }

    
//     }
//     return 
// };
// const forts = [1,0,0,-1,0,0,0,0,1]

// console.log(captureForts(forts))

// var captureForts = function(forts) {
//     let positions = [];

//     for (let i = 0; i < forts.length; i++) {
//         if (forts[i] === 1) {
//             positions.push(i);
//         }
//     }

//     return positions;
// };

// const forts = [1, 0, 0, -1, 0, 0, 0, 0, 1];
// console.log(captureForts(forts));



var captureForts = function(forts) {
    const n = forts.length;
    let maxCapturedForts = 0;

    for (let i = 0; i < n; i++) {
        if (forts[i] !== 1) { 
            for (let j = i + 1; j < n; j++) {
                if (forts[j] !== 1) { 
                    let capturedForts = 0;

                    
                    for (let k = Math.min(i, j) + 1; k < Math.max(i, j); k++) {
                        if (forts[k] === 0) { 
                            capturedForts++;
                        }
                    }

                    maxCapturedForts = Math.max(maxCapturedForts, capturedForts);
                }
            }
        }

    }

    return maxCapturedForts;
};

// // Example usage:
// const forts1 = [0,0,1,-1]
// console.log(captureForts(forts1)); // Output: 4

// const forts2 = [0, 0, 1, -1];
// console.log(maxEnemyForts(forts2)); // Output: 0

function fort(arr) {
    var index1 = [];
    var result1 = 0;
    var result2 = 0;
    var result = 0;
    var index2 = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        index1.push(i);
      }
      if (arr[i] === -1) {
        index2.push(i);
      }
    }
  
    result2 = Math.max(...index2);
    result1 = Math.max(...index1);
  
    if (result1 < result2) {
      result = result2 - result1 - 1;
    } else {
      result = result1 - result2 - 1;
    }
  
    return result;
  }
  
  const arr = [1, 0, 0, 0, -1, 0, 0, 0, 0, 1, -1];
  console.log(fort(arr));
  