function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayFun(data))
};

function displayFun(input){
    const ulList = document.getElementById('user-list');
    for(const user of input){
    console.log(user.name);
    const li = document.createElement('li');
   li.innerText = user.email
  ulList.appendChild(li);

    }



}