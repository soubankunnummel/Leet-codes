var sortPeople = function(names, heights) {
    let newaryy = []

    for (let i = 0; i < heights.length; i++) {
      let  obj = {
            names : names[i],
            height: heights[i]

        }
        newaryy.push(obj)
    }
     newaryy.sort((a,b) => {
        return b.height - a.height
    })
     return   newaryy.map((item) => item.names)
     
}
const names =  ["Alice","Bob","Bob"], heights = [155,185,150]
console.log(sortPeople(names,heights))


// function sortNamesByHeight(names, heights) {
//     // create an empty array to store the result
//     let result = [];
//     // loop through the names array
//     for (let i = 0; i < names.length; i++) {
//       // create an object for each name and height pair
//       let obj = {
//           name: names[i],
//         height: heights[i]
//       };
//       // push the object to the result array
//       result.push(obj);
//     }
//     // sort the result array by the height property in descending order
//     result.sort(function(a, b) {
//       return b.height - a.height;
//     });
//     // map the result array to return only the name property
//     result = result.map(function(obj) {
//       return obj.name;
//     });
//     // return the result array
//     return result;
// }

// const names = ["Mary","John","Emma"], heights = [180,165,170]
// console.log(sortNamesByHeight(names,heights))