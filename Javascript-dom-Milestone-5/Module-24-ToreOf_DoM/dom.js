
// const h1 = document.getElementsByTagName('h1')
//  document.getElementsByClassName('')
//  document.getElementById('')
//  document.querySelector('')
//  document.querySelectorAll('')
// console.log(h1)


const sections = document.querySelectorAll('section');
for(const items of sections){
    
    // console.log(items)
    items.style.border = '2px solid steelblue';
    items.style.margin = '8px';
    items.style.padding= '7px';
    items.style.borderRadius = '10px';
    items.style.color = 'green';
    
}
// for(let i = 0; i < sections.length; i++){
//     const element = sections[i];
//     console.log(element)
// }

const furitsContainer = document.getElementById('furits-container');
// console.log(furitsContainer)
// furitsContainer.style.backgroundColor = 'yellow';

/* --------- css class Add to javascript attrivute------------- */
furitsContainer.classList = 'text-yellow';

/* ---------  css class remove to javascript attrivute------------- */
furitsContainer.classList.remove('text-yellow');


/* main section */

const blogSections =  document.getElementById('blog-section');
 blogSections.style.color = 'yellowgreen';
 blogSections.addEventListener('click', function(){
    
 })