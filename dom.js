const appUl = document.querySelector('#app ul');

const appendTodoToUl = function(texts, ul) {
    [texts]
        .flat()
        .map(text => {
            const li = document.createElement('li')
            li.innerHTML = text
            return li;
        }).forEach(li => {
            ul.appendChild(li)
        })
}

appendTodoToUl([
    'First LI',
    'second li',
    'third li',
    'fourth li'
], appUl)
