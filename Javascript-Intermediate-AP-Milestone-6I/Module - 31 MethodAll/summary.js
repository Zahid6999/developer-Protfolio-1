// 1. optional chaining
// student.marks?.maath

//( must be )
// map(), filter(), fiend();
// protitypical Inheritance (interviwe Q.)


// Problem Practice----------------

const oddNumber = [1, 3, 5, 7, 9];
const evenNumber = oddNumber.map(evn => evn + 1);
console.log(evenNumber);

const oddNumberForLoop =  [1, 3, 5, 7, 9];
for(let i = 0; i < oddNumberForLoop.length; i++){
    const number = i;
    const element = oddNumberForLoop[i];
    const evenNumber = element + 1;
    console.log(evenNumber);
};


// Problem Practice----------------2

// const divitionArray = [33, 50, 79, 78, 90, 101, 30];
// const divitionBy10 = divitionArray.filter(d => d % 10 === 0);
// console.log(divitionBy10); 



// Problem Practice----------------3
const divitionArray = [33, 50, 79, 78, 90, 101, 30];
const divitionBy10 = divitionArray.find(d => d % 10 === 0);
console.log(divitionBy10);



// Problem Practice----------------4
const reduceArray = [1, 9, 17, 22];
const reduceArraySum = reduceArray.reduce((previousValue, currentValue)  =>  previousValue + currentValue);
console.log(reduceArraySum);


// Problem Practice----------------5  ====Pari nai====
const people = [
    {name: 'meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'tonu', age: 19}
];
const [age] = people;
console.log(age);





// Problem Practice----------------6
let date = {
location: [
    {
        latitude: '34.5 , 3708',
        longitude: '395.28',
        city : 'Tangail'
    },
],
        
};
const cityConsole = date.location[0].city
console.log(cityConsole);



// =======
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);



// -------How will you get the price from the product object? -----------
const product = {
    name: 'Laptop', 
    model:'Yoga 3',
    price:49000, 
    dusk: '512SSD'
    }
    const {price} = product;
    console.log(price);