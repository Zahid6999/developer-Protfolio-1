// for(let i = 0; i <= 20; i++){
//     if(i > 10){
//         break
//     }
    
//     console.log(i)
    
    
// }


// let arr = ['zahid', 'somed', 'nibir', 'nahid', 'jakaria'];

// for(let t = 0; t < arr.length; t++){
//     let zahid = arr[t];
//     if(zahid === 'nibir'){
//         break;

//     }
//     console.log(zahid)
// }

// let numArr = [12, 22, 33, 44, 55, 66, 77, 88, 120, 255];

// for(let z = 0; z < numArr.length; z++){
//     let arrSet = numArr[z];
//     if(arrSet > 100){
//         break
//     }
//     console.log(arrSet)
// }

// =======Continue=======

// let numArr = [12, 22, 33, 44, 55, 66, 77, 88, 30, 49,  120, 255];
// for(let z = 0; z < numArr.length; z++){
//     let arrSet = numArr[z];
//     if(arrSet > 50){
//         continue
//     }
//     console.log(arrSet);
// }




let arr = ['zahid', 'somed', 'nibir', 'nahid', 'jakaria'];

for(let i = 0; i < arr.length; i++){
    let setArr = arr[i];
    if(setArr === 'nibir'){
        continue; 
    }
    console.log(setArr)
}