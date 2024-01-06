var splitNum = function(num) {
    
     const news = num.toString().split("").sort((a ,b) => a - b)
    let  num1 = ""
    let  num2 = ""

     for (let i = 0; i < news.length; i++) {
            if(i % 2 === 0 )  {
                num1 += news[i]
              
            }else{
                num2 += news[i]
            }

     }
     console.log(num1, num2)
     return parseInt(num1) + parseInt(num2)
   
};
const arr = [4325]
console.log(splitNum(arr))

