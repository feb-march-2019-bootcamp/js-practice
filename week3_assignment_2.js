function secondLeastAndGreatest(input) {
  return input
    .sort((a, b) => a - b)
    .filter((_, i, a) => i === 1 || i === a.length - 2);
}

const arr = [2, 4, 1, 3, 5];
console.log(secondLeastAndGreatest(arr));

function occuranceOfLetter(text, letter) {
  return [...text].reduce((acc, c) => (c === letter ? acc + 1 : acc), 0);
}

function occuranceOfLetter2(text, letter) {
  return [...text].filter(x => x === letter).length;
}

console.log(occuranceOfLetter("w3resource.com", "o"));
console.log(occuranceOfLetter2("w3resource.com", "o"));

function firstNotRepeatedCharacter(text) {
  return [...text].find((x, _, a) => a.indexOf(x) === a.lastIndexOf(x)) || null;
}

console.log(firstNotRepeatedCharacter("abacddbec"));
