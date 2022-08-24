// const postButton = document.getElementById('post-btn').addEventListener('click', function(){
//     const textArea = document.getElementById('textArea');
//     const newPost = textArea.value;
//     const commentContainer = document.getElementById('comment-container');
//     const p = document.createElement('p');
//     p.innerText = newPost;
//     commentContainer.appendChild(p);
    

//     textArea.value = '';
// })


/* Two times practice  */

document.getElementById('post-btn').addEventListener('click', function(){
const textArea = document.getElementById('textArea');
const textValue = textArea.value;
const commentContainer = document.getElementById('comment-container');
const createPtag = document.createElement('p');
createPtag.innerText = textValue;
commentContainer.appendChild(createPtag);

textArea.value = '';


});