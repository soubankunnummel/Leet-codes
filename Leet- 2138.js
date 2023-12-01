// var divideString = function(s, k, fill) {
//     let text = s.padEnd(Math.ceil(s.length/3)*3,fill)
//     const ayy = text.match(/.{3}/g)
//    return ayy
// };
// const s = "ctoyjrwtngqwt"
// const  k = 3
// const fill = "x"
// console.log(divideString(s,k,fill))


function partitionString(s, k, fill) {
   const partitions = [];
   let i = 0;
 
   while (i < s.length) {
     const partition = s.slice(i, i + k);
 
     // Check if merging is possible
     if (partitions.length >= 2 && partitions[partitions.length - 1].length + partition.length >= k) {
       // Merge the last two groups
       partitions[partitions.length - 2] += partition;
       continue;
     }
 
     // Fill the partition with 'fill' characters if necessary
     if (partition.length < k) {
       partition += fill.repeat(k - partition.length);
     }
 
     // Append the partition to the list
     partitions.push(partition);
 
     i += k;
   }
 
   return partitions;
 }
 
 const s = "ctoyjrwtngqwt"
const  k = 3
const fill = "x"
console.log(partitionString(s,k,fill))

TODO // need to update