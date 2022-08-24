//const button1 = document.getElementById('button-1');
// button1.onclick = function sum (){
    //     document.body.style.backgroundColor = 'red';
    // }
    const button1 = document.getElementById('button-1');
    button1.onclick = function (){
        document.body.style.backgroundColor = 'yellow'
    };
 


    function clickButton (){
        document.body.style.backgroundColor  = 'green';
      
    }



    // AddEventListener 
    const makePink = document.getElementById('make-pink');
    makePink.addEventListener('click', pinkColor)
    function pinkColor(){
    document.body.style.backgroundColor = 'red';
    }


    // final addEventListener 
    const makeTomato = document.getElementById('make-tomato').addEventListener('click',function(){
        document.body.style.backgroundColor = 'tomato';
    })