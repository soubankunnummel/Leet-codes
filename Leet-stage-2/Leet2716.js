var minimizedStringLength = function(s) {
    const str = s.replace(/(.)(?=.*\1)/g, "")
   console.log(str)
   return str.length
}

minimizedStringLength("aaabc")