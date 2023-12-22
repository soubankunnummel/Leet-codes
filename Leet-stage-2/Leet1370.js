// var sortString = function(s) {
//     //  var neaArry = s.split("")
     
//      let result = ""
//      while (s.length > 0) {
//         let smallest = s[0]
//         let largest = s[0]
//         // console.log(smalles, largest)
        
//         for (let i = 0; i < s.length; i++) {
//          if(s[i] < smallest) smallest = s[i]
//          if(s[i] > largest) largest = s[i]

            
//         }
//      }
//      result += smallest
//      s = s.replace(smallest, "")

// }
// const s =  "aaaabbbbcccc"

// console.log(sortString(s))


// function sortString(s) {
//     // Initialize an empty string to store the result
//     let result = "";
//     // Repeat until the input string is empty
//     while (s.length > 0) {
//       // Find the smallest and the largest characters in the input string
//       let smallest = s[0];
//       let largest = s[0];
//       for (let i = 1; i < s.length; i++) {
//         if (s[i] < smallest) {
//           smallest = s[i];
//         }
//         if (s[i] > largest) {
//           largest = s[i];
//         }
//     }
//       // Append the smallest character to the result and remove it from the input string
//       result += smallest;
//       s = s.replace(smallest, "");
//       // Find and append the next smallest character that is greater than the last appended character
//       while (s.length > 0) {
//         let nextSmallest = s[0];
//         for (let i = 1; i < s.length; i++) {
//             if (s[i] < nextSmallest && s[i] > result[result.length - 1]) {
//                 nextSmallest = s[i];
//           }
//         }
//         if (nextSmallest > result[result.length - 1]) {
//           result += nextSmallest;
//           s = s.replace(nextSmallest, "");
//         } else {
//           break;
//         }
//     }
//     // Append the largest character to the result and remove it from the input string
//     result += largest;
//     s = s.replace(largest, "");
//       // Find and append the next largest character that is smaller than the last appended character
//       while (s.length > 0) {
//         let nextLargest = s[0];
//         for (let i = 1; i < s.length; i++) {
//           if (s[i] > nextLargest && s[i] < result[result.length - 1]) {
//             nextLargest = s[i];
//           }
//         }
//         if (nextLargest < result[result.length - 1]) {
//           result += nextLargest;
//           s = s.replace(nextLargest, "");
//         } else {
//             break;
//         }
//       }
//     }
//     // Return the result string
//     return result;
// }

function sortString(s) {
    let numRows = 1
    // If the input string has only one character or the number of rows is one, return the input string
    if (s.length === 1 || numRows === 1) {
      return s;
    }
    // Initialize an array of strings to store the characters in each row
    let rows = [];
    for (let i = 0; i < numRows; i++) {
      rows[i] = "";
    }
    // Initialize a variable to keep track of the current row
    let row = 0;
    // Initialize a variable to keep track of the direction of the zigzag
    let down = true;
    // Loop through the input string
    for (let i = 0; i < s.length; i++) {
      // Append the current character to the current row
      rows[row] += s[i];
      // If the direction is down, increment the row
      if (down) {
        row++;
      // Otherwise, decrement the row
      } else {
        row--;
      }
      // If the row reaches the first or the last row, switch the direction
      if (row === 0 || row === numRows - 1) {
        down = !down;
      }
    }
    // Initialize an empty string to store the result
    let result = "";
    // Loop through the array of strings and concatenate them
    for (let i = 0; i < numRows; i++) {
      result += rows[i];
    }
    // Return the result string
    return result;
  }
  
  const s = "aaaabbbbcccc";
  console.log(sortString(s)); // "abccbaabccba"
  
// const s =  "aaaabbbbcccc"

// console.log(sortString(s))
  