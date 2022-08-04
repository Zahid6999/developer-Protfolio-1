for(let i = 10; i > 1; i--){
    console.log(i)
}


let arrayList = ['Zahid', 'sajid', 'Asraf', 'Nazim', 'Limon', 'Rony', 'Mehedi'];

for(let z = 0;z < arrayList.length; z++){
let list = arrayList[z];
if(list === 'Rony'){
    continue;
}
console.log(list)
}