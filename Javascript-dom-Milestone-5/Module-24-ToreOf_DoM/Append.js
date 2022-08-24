const appendList = document.getElementById('append-list');
const li = document.createElement('li');
li.innerText = 'jamalpur';
appendList.appendChild(li);


// const mainContainer = document.getElementsByClassName('main-container');
// const section = document.createElement('section');
// const h2 = document.createElement('h2');
// h2.innerText = 'Food list';
// section.appendChild(h2);

// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// ul.appendChild(li1);
// section.appendChild(ul);
// mainContainer.appendChild(section);



const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `

<h1> My dynamic section</h1>
<ul>
<li>first items <li/>
<li>first items <li/>
<li>first items <li/>
<li>first items <li/>
<ul/>
`

mainContainer.appendChild(section); 
