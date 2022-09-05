const number = [10, 2, 20, 23, 15, 25, 66, 82 ,21];
const bigNumber = number.filter(num => num > 20);
const smallNum = number.filter(n => n < 11);
const divition = number.filter(number => number % 2 === 0);
console.log(divition);