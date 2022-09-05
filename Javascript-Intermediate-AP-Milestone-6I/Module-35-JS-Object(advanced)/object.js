const player = {};
player.name = 'zahid';
player.specialty = 'left-Heand-spinar-Ballur';
player.bat = function(){
    return('ami cricket kheli and web-development shikhchi');
}

console.log(player);
console.log(player.bat());

// Object constructor 
const parson = new Object();
parson.name = 'tonu',
parson.fatherName = 'Tarek Rahman';
console.log(parson.fatherName);

/* Class diye Object decklaration  */

class zahid{
    name = 'zahid Hasan';
    salary = 200000;
    profassition = 'web developer';
    constructor(age){
        this.age = age;
    }
};
const zahidResult = new zahid(21);
// console.log(zahidResult.name);
console.log(zahidResult);



class parson2{
  constructor(fristName, lastName){
    this.fristName = fristName;
    this.lastName = lastName
  };
};

const firstParson = new parson2('Marjana Yeasmin', 'Tonu');
console.log(firstParson.fristName);
const lastParson = new parson2('zahid', 'hasan');
console.log(lastParson.fristName);

// Quiz quastion
const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);


const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend()); 