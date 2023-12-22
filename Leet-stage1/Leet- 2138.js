function divideString(string, k, fill) {
   const partitions = [];
   for (let i = 0; i < string.length; i += k) {
     let partition = string.slice(i, i + k);
     if (partition.length < k) {
       partition += fill.repeat(k - partition.length);
     }
     partitions.push(partition);
   }
   return partitions;
 }
 
 const string = "abcdefghi";
 const k = 3;
 const fill = "x";
 
 const partitions = divideString(string, k, fill);
 console.log(partitions); // Output: [ 'abc', 'def', 'ghi', 'jxx' ]