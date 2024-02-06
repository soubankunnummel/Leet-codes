var splitWordsBySeparator = function(words, separator) {
    // const newaryy = words.toString().split(`${separator}`)
    const newaryy = words.join(separator).split(separator).filter((val) => val != '')
    console.log(newaryy)
    return newaryy
};
splitWordsBySeparator(words = ["|||","|"], separator = "|")