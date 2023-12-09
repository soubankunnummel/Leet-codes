var largestGoodInteger = function(num) {
    let maxGoodInteger = "";
    for (let i = 0; i < num.length - 2; i++) {
        if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
            const repeatedDigit = num[i];
            const currentGoodInteger = String(repeatedDigit).repeat(3);
            if (currentGoodInteger > maxGoodInteger) {
                maxGoodInteger = currentGoodInteger;
            }
        }
    }

    return maxGoodInteger;
};

const num = "3200014888";
console.log(largestGoodInteger(num));
