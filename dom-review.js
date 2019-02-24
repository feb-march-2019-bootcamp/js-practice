const ul = document.querySelector('#app ul');

const newLi = document.createElement('li');
newLi.innerHTML = 'First Li';

// ul.appendChild(newLi) // to add to the ul


const btn = document.createElement('button');
btn.innerHTML = 'Click Me'

// read
const app = document.querySelector('#app');

app.prepend(btn);

// read
const textBox = document.querySelector('#newText');

// events 
btn.addEventListener('click', e => {
    console.log('Button clicked')

    // not ''
    if (textBox.value === '') return;

    // clone
    const liClone = newLi.cloneNode(true);
    liClone.innerHTML = textBox.value;
    textBox.value = '';

    // create
    const removeBtn = document.createElement('button')
    removeBtn.innerHTML = 'X'
    liClone.appendChild(removeBtn)

    // .remove()
    removeBtn.addEventListener('click', () => liClone.remove())

    ul.appendChild(liClone)
})

const endpoint = username => `https://api.github.com/users/${username}/repos`;

const repos = document.querySelector('#repos ul');

const username = document.querySelector('#username');

document.querySelector('#get-repos')
    .addEventListener('click', () => {
        
        axios.get(endpoint(username.value))
            .then(res => {
                repos.innerHTML = '';
                res.data.forEach(x => {
                    const li = document.createElement('li');
                    li.innerHTML = x.name;
                    repos.appendChild(li)
                })
            })
    })
    