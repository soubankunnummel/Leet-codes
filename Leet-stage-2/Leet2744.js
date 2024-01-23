// var maximumNumberOfStringPairs = function (words) {
//   let count = 0;
//   for (let i = 0; i < words.length; i++) {
//     const reversed = words[i].split("").reverse().join("");
//     const index = words.indexOf(reversed);
//     if (index !== -1 && index != i) {
//       count++;
//     }

//     return count / 2;
//   }
//   //     let str = words.includes( /^(\w{2})$/)
//   //     console.log(str)
//   //     const matchingWords = str.filter(word => pattern.test(word));
//   // console.log(matchingWords);
// };

// console.log(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]));

function maximumNumberOfStringPairs(words) {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        const reversed = words[i].split('').reverse().join('');
        const indexOfReversed = words.indexOf(reversed);

        if (indexOfReversed !== -1 && indexOfReversed !== i) {
            count++;
        }
    }

    return count / 2; // Divide by 2 to account for each pair being counted twice
}

// Example 1
const example1 = ["cd", "ac", "dc", "ca", "zz"];
console.log(maximumNumberOfStringPairs(example1)); // Output: 2
