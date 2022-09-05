const  dtls = {
    name: 'zahid', 
    age : 21,
    profassion: 'web-developer'
};

// const namee = dtls.name;
// const age = dtls.age;

// console.log(dtls['name']);
// console.log(dtls.name);
// console.log(namee);
// console.log(age);



const {name, profassion} = dtls;
// const {profassion} = dtls
console.log(name);
console.log('My name is ' + ' '+ name+' and i am Full seack '+ profassion+'') ;
console.log(`My name is ${name} and i am Full seack  ${profassion}.`) ;




// destructuing Array
function getNames(){
return ['Mozanmel', 'Hamid']; 
}
const [baba , chacha] = getNames()
console.log(baba);
console.log(chacha, baba);



// console.log(arrow(10,10,10));
// const arrow = (num1, num2, num3) => {
    //    return num1 * num2 * num3;
    // }
    
    // console.log(arrow(10,10,10));
    
    function arrow2 (num1, num2, num3 = 10){
   return num1 + num2 + num3;
    }
    

   const result =  arrow2(10, 2,);
       console.log(result);


      
    