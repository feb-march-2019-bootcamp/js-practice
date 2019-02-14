const appUl = document.querySelector("#app ul");

const appendTodoToUl = function(texts, ul, noUnderline = false) {
  if (noUnderline) {
    // add the class of no-underline and remove with-undeline to ul
    // ul.classList.remove('with-underline')
    // ul.classList.add('no-underline')

    // or replace
    ul.classList.replace("with-underline", "no-underline");

    // logs the classes of ul
    console.log(ul.getAttribute("class"));
    console.log(ul.className);
  }

  [texts]
    .flat()
    .filter(Boolean)
    .map((text, i) => {
      const li = document.createElement("li");

      const a = document.createElement("a");
      a.innerHTML = text;

      li.appendChild(a);

      a.setAttribute("href", `http://${text.toLowerCase()}.com`);

      a.style.fontSize = `${15 + i * 5}px`;

      a.style.backgroundColor = `rgba(${(i * 90) % 256}, 
                ${(i * 60) % 256}, ${(i * 80) % 256}, .5)`;

      a.addEventListener("click", function(e) {

        // don't visit the link (default action)
        e.preventDefault();
      });

      if (text.length <= 4) {
        li.setAttribute("class", "green-text");
      } else if (text.length < 8) {
        li.setAttribute("class", "yello-text");
      } else {
        li.setAttribute("class", "red-text");
      }

      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'X'

      deleteButton.addEventListener('click', () => {  
        li.remove();
      })

      li.appendChild(deleteButton);

      return li;
    })
    .forEach(li => {
      ul.appendChild(li);
    });
};

appendTodoToUl(
  ["Mohammed", "Ali", "Shakhawan", "Najiba", null, "", undefined, "Omar"],
  appUl,
  true
);

const newTodoText = document.getElementById('todoText');
const addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', () => {
    const text = newTodoText.value;
    newTodoText.value = '';
    
    appendTodoToUl(text, appUl);
})