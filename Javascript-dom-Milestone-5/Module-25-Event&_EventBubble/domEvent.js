// function handlerStatus (){
//     const handlerSta = document.getElementById('handler-status');
//     handlerSta.innerText ='Handled By function Attached on onclick Attribute';
// }


const eventClick = document.getElementById('event-click').addEventListener('click', function(){
    const handlerSta = document.getElementById('handler-status');
    handlerSta.innerText = 'Handled by Function Attached on onClick function Attribute';
})


const submitBtn = document.getElementById('submit').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    let inputText = inputField.value;
    inputField.value = '';
    const p = document.getElementById('paragraph');
    p.innerText = inputText;


})