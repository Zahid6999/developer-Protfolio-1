// const urls = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(urls)
// .then(res => res.json())
// .then(data => console.log(data));

// function appBtn(){
// const urls = 'https://jsonplaceholder.typicode.com/users';
// fetch(urls)
// .then(res => res.json())
// .then(data => paramaterFunction(data))
// };

// function paramaterFunction(data){
    //     console.log(data);
    // }
    
    function appBtn(){
        const urlUser = 'https://jsonplaceholder.typicode.com/users';
        fetch(urlUser)
        .then(res => res.json())
        .then(data => callParamaterFunction(data))
        }

         
        function callParamaterFunction(data){
            console.log(data);
          }
document.getElementById('app-btn').addEventListener('click', function(){
          appBtn()
    
       
})
