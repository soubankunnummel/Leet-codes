function isPrime(num) {
   const nonPrime = num.filter((item) =>  item%2 !== 0)
   return nonPrime
}
const num = [1,2,3,4,5,6,7,8,9]
console.log(isPrime(num))