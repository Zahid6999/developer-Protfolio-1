function postFun(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => displayFun(data))
}

function displayFun(inputData){
    const postScetion = document.getElementById('all-post-section');

    for(const post of inputData){
        console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-area');
        postDiv.innerHTML = `
        <h3>Id: ${post.id}</h3>
        <h4>UserId: ${post.userId}</h4>
        <h5>Title: ${post.title}</h5>
        `
        postScetion.appendChild(postDiv);
        
    }

}


postFun()



// Todos area

function todoList(){
    const urls = 'https://jsonplaceholder.typicode.com/todos';
fetch(urls)
.then(promice => promice.json())
.then(todo => todoCallBackFun(todo))
}

function todoCallBackFun(todoInput){
    const todosArea = document.getElementById('todos-area');
    for(const singleTodo of todoInput){
        const createDiv = document.createElement('div');
        createDiv.classList.add('todo-class')
        createDiv.innerHTML = `
          <h3>Completed: ${singleTodo.completed}</h3>
          <h2>Id-Number: ${singleTodo.id}</h2>
          <h4>userId: ${singleTodo.userId}</h4>
          <h5>Description: ${singleTodo.title}</h5>
        `;
       todosArea.appendChild(createDiv);
    }
}

todoList();