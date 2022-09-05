// defalut parameters
function calculateSalary(salary, tex = 20, bonus = 300){
    const remaining =  salary - salary*tex;
    const total = remaining + bonus
    console.log(total);
}

calculateSalary(20000, )


// arrow function 
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tex, bonus) => salary - salary * tex + bonus;



// const result = doubleIt(20);
console.log(calculateSalary2(2000, 25, 631));



// spread 
const ages = [10, 20, 30, 22,18];
const ages2 = [...ages, 102, 1210, 10];
console.log(ages2);


// destructuring
const obj = {
    name: 'petar',
    age : 13,
    address : 'mohammad pur',
    zahidDtls : {
        name : 'zahid', 
        profassion : 'web developer'
    }
};
// console.log(obj.zahidDtls.name);
const {zahidDtls} = obj;
console.log(zahidDtls)


// ones more 
const {x, y, z} = {x : 12, y : 15, z : 10};
console.log(x, y);