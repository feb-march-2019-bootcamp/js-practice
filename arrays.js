const students = [
    {firstName: 'Mohammed', lastName: 'Mwafaq', age: 24, married: false, avgScore: 79.3},
    {firstName: 'Shaymaa', lastName: 'Adnan', age: 22, married: false, avgScore: 73.52},
    {firstName: 'Sazgar', lastName: 'Omar', age: 22, married: false, avgScore: 75.39},
    {firstName: 'Shakhawan', lastName: 'Shukr', age: 34, married: true, avgScore: null},
    {firstName: 'Mahmood', lastName: 'Bashar', age: 29, married: false, avgScore: 70.2},
];

/**
 * {name: 'Shakhawan', age: 34, married: true, avgScore: null},
 * {name: 'Mahmood', age: 29, married: false, avgScore: 70.2},
 */

// const moreThan25 = [];

for (const student of students) {
    if (student.avgScore === 20) {
        // console.log('Less than 20')
    }
    if (student.age > 25) {
        //moreThan25.push(student)
        // ......


    }
}

// { name: 'Mahmood', age: 29, married: false, avgScore: 70.2 }
// { name: 'Mahmood', yearOfBirth: 1990, married: false, avgScore: 70.2 }
console.log(
    // students
    //     .sort( (a, b) => b.age - a.age)
    //     .map(s => {
    //         let scoreIncrement = 0;
    //         if (s.avgScore < 75) {
    //             scoreIncrement= 1;
    //         }
    //         return {
    //             ...s,
    //             avgScore: s.avgScore + scoreIncrement,
    //         }
    //     })
    //     .reduce((accu, c) => accu + c.firstName.length + c.lastName.length, 0)
);

let PI = 22/7;

students.map((s, i) => {
    // should be no side effects
});

students.forEach((s, i) => {
    // side effects here
});

console.log(25 * PI);


