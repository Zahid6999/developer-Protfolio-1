let momMoney = 1000;
let applePrice = 400;
let orangePrice = 300;

let totalPrice = applePrice + orangePrice;
console.log(totalPrice)

let returnBack = momMoney - totalPrice;
console.log(returnBack)



let mathMarks = 75.25;
let biologyMarks = 65;
let chemistryMarks = 80;
let physicsMarks = 35.45;
let banglaMarks = 99.50;

let totalMarks = mathMarks  + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
console.log(totalMarks);
let averageMarks =totalMarks / 5;
let averageTwoDecimal = averageMarks.toFixed(2)
console.log(averageTwoDecimal)


/* ======Practice problem -1===== */

let fruits = ['Apple', 'Banana', 'Orange'];

let bananaIndexOf =  fruits.indexOf('Banana');

let replace =  fruits[1] = 'Mango';
console.log(fruits)

fruits.pop()
fruits.push('Watermelon');
console.log(fruits)

console.log(bananaIndexOf)




/* Problem -2 */
let myScore = 85;


if(myScore < 80){
    console.log('A Grade');
}else if(66 > 60){
    console.log('B Grade');
}

// problem-3

let num1 = 13;
let num2 = 79;
let num3 = 45;

if(num1 > num2){
    if(num1 > num3){
        console.log(num1)
    }
    else{
        console.log(num3)
    }
}else{
    if(num2 > num1){
        console.log(num2)
    }
    else{
        console.log('nai')
    }
}



let ami = 'zahid';
 
console.log(ami)

let tmi = 'Hasan';
let result = ami + ' ' + tmi;
console.log(result)

let num5 = 10;
num5 --                                                                          /* 12 problem */
console.log(num5)



arr = [12, 122, 22, 33, 44, 55, 66, 77,];
arr[1] = 20

// let rest = arr.indexOf(12)



let money = 41000;
if(money > 80000){
    console.log('Buy Mac-Book');

}
else if (money > 60000) {
    console.log('Gamming Laptop');

}else if (money > 40000){
 console.log('Lenovo Yoga')

}else{
    console.log('Mobile phon')
}


let i = 0;


// while(i < 39){
//     console.log('Ajke amr mon vlo nei')
//     i++;
// }

// for(let z = 413; z < 465; z += 2){
//     console.log(z)
// }


// let study = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JavaScript'];
// for(let t = 0; t < study.length; t++){
    
//     console.log(study)
// }

// let mobileList = ['Button-Phone', 'samphony-i25', 'samsung', 'realmi']

// let m = 0;
// while(m < mobileList.length){
//     console.log(mobileList)
//     m++
// }


for(let i = 30; i < 85; i++){
    if(i === 44){
        continue
    }
    console.log(i)
}
let books = [80, 99, 120, 155, 220, 251, 199, 185];

for(let z = 0; z < 1; z++){
    if(z >= 200){
        break;
    }
    console.log(books)
}