// the old
const xhr = new XMLHttpRequest();

xhr.open("post", "https://jsonplaceholder.typicode.com/posts");

xhr.addEventListener("load", () => {
  console.log(JSON.parse(xhr.responseText));
});

const newPost = {
  userId: 1,
  title:
    "This is title",
  body:
    "This is body"
};

xhr.send(newPost);


// The modern fetch api
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.log(e))