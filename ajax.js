import Axios from 'axios';

const newPost = {
    userId: 1,
    title: "This is title",
    body: "This is body"
  };

// the old
const xhr = new XMLHttpRequest();

xhr.open("post", "https://jsonplaceholder.typicode.com/posts");

xhr.addEventListener("load", () => {
  console.log(JSON.parse(xhr.responseText));
});

xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(JSON.stringify(newPost));

// The modern fetch api
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(x => x.json())
//     .then(x => console.log(x))
//     .catch(x => console.log(x))

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "post", // or put, patch, delete
  body: JSON.stringify(newPost),
  headers: {
      'Content-Type': 'application/json'
  }
})
.then(x => x.json())
.then(console.log)
.catch(console.log)


// The axios way
Axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
    .then(res => console.log(res.data))
    .catch(console.log);