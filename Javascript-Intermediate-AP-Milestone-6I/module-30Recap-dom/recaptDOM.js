document.getElementById('btn-click').addEventListener('click', function(){
    const friendsName = document.getElementsByClassName('friends-name');
    for(let friend of friendsName){
        friend.style.backgroundColor = 'green';
    };
});

document.getElementById('btn-click-three').addEventListener('click', function(){
    const Three = document.getElementById('friend-three');
    Three.style.textAlign = 'center';
})



document.getElementById('add-friend-btn').addEventListener('click', function(){
const friendParents = document.getElementById('friends-parents');
const createH3 = document.createElement('h3');
createH3.innerText = 'new Friend add';
console.log(createH3);
friendParents.appendChild(createH3);
});
    
