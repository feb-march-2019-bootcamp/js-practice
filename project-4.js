const addBtn = document.getElementById('addBtn');
const newTodo = document.getElementById('newTodo');

const todos = document.getElementById('todos');
const completed = document.getElementById('completed');

addBtn.addEventListener('click', () => {
    const text = newTodo.value;
    newTodo.value = '';

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    li.innerText = text;
    li.prepend(checkbox);

    todos.appendChild(li);

    checkbox.addEventListener('click', () => {
        li.remove();
        checkbox.remove();

        completed.appendChild(li);


        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(deleteBtn);
    })
})