const appUl = document.querySelector('#app ul');

const appendTodoToUl = function(texts, ul) {
    [texts]
        .flat()
        .map((text, i) => {
            const li = document.createElement('li')
            
            const a = document.createElement('a');
            a.innerHTML = text

            li.appendChild(a);

            a.setAttribute('href', `http://${text}.com`);

            a.style.fontSize = `${15 + (i * 5)}px`;

            a.style.backgroundColor = `rgba(${i * 90 % 256}, ${i * 60 % 256}, ${i * 80 % 256}, .5)`;

            if (text.length <= 4) {
                li.setAttribute('class', 'green-text');
            } else if (text.length < 8) {
                li.setAttribute('class', 'yello-text');
            } else {
                li.setAttribute('class', 'red-text');
            }

            return li;
        }).forEach(li => {
            ul.appendChild(li)
        })
}

appendTodoToUl([
    'Mohammed',
    'Ali',
    'Shakhawan',
    'Najiba',
    'Omar'
], appUl)
