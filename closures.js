function createMapperFor(array) {
  return function(mapper) {
    const mapped = [];
    array.forEach((...args) => mapped.push(
        mapper(...args))
      );
    return mapped;
  };
}

const students = [
  { name: "a", age: 20, score: 70 },
  { name: "b", age: 19, score: 80 }
];

const studentMapper = createMapperFor(students);

console.log(studentMapper((x, i) => x.name + i));
console.log(studentMapper(x => x.name));
console.log(studentMapper(x => x.age));
console.log(studentMapper(x => x.age));
