module.exports = function toReadable(number) {
    const digits = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const elevenToNineteen = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) return digits[0];

    if (number < 10) {
        return digits[number];
    } else if (number < 20 && number !== 10) {
        return elevenToNineteen[number - 11];
    } else if (number < 100) {
        let result = tens[Math.floor(number / 10) - 1];
        if (number % 10 > 0) result += " " + digits[number % 10];
        return result;
    } else {
        let hundreds = Math.floor(number / 100);
        let remainder = number % 100;
        let result = digits[hundreds] + " hundred";
        if (remainder > 0) {
            if (remainder < 10) {
                result += " " + digits[remainder];
            } else if (remainder < 20 && remainder !== 10) {
                result += " " + elevenToNineteen[remainder - 11];
            } else {
                result += " " + tens[Math.floor(remainder / 10) - 1];
                if (remainder % 10 > 0) result += " " + digits[remainder % 10];
            }
        }
        return result;
    }
};
