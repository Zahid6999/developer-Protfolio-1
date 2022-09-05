const numbers = [1 ,2, 4, 6, 8, 10, 12, 14, 16];
const output = [];

for(const num of numbers){
    const dobule = num;
    const dobuleMulti = dobule * 2;
    output.push(dobuleMulti);
}
console.log(output);

/* MAP METHORD Using----- */
const makeDouble = numbers.map(n => n * 2);
const makeDoubleIt = numbers.map(zahid => zahid * 5);
const tonu = numbers.map(tonu => tonu * 3);

console.log(tonu);


/* ---------More Map----------- */

const friends = ['sakib', 'nazmul', 'shishir', 'aloy', 'Nayem'];
const firstLetter = friends.map(n => n[0]);

const friendLenth = friends.map(friend => friend.length);
console.log(friendLenth );



const products =[ 
    {id : 1, name : 'i phone', Price : 112340 },
    {id : 2, name : 'realme', Price : 14340 },
    {id : 2, name : 'pc', Price : 92340 },
    {id : 3, name : 'macBook', Price : 312340 },
];
const price = products.map(price => price);
const name = products.map(pName => pName)
console.log(name);