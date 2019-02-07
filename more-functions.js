function sumAll() {
  return [...arguments].map(x => Number(x) || 0).reduce((acc, x) => acc + x);
}

function multiplyAll() {
  return [...arguments].map(function(x) {
      return Number(x) || 1
  })
  .reduce((prev, x) => prev * x);
}

// console.log(multiplyAll(2, 3, 5, 10, "b"));

/**
 *
 * @param {String} input
 */
function numberOccurances(input) {
  return [...input]
    .map(Number)
    .filter(x => !Number.isNaN(x))
    .reduce(
      (prev, current) => {
        prev[current] = prev[current] || 0;
        prev[current]++;

        return prev;
      },
      {}
    )
    // .reduce((prev, current) => {
    //   Object.keys(current)
    //     .map(k => ({ num: Number(k), occurances: current[k] }))
    //     .forEach(x => prev.push(x));
    //   return prev;
    // }, []);
}

// const printText = function(printFunc) {
//     return function(text) {
//         return printFunc(text)
//     }
// };

const printText = printFunc => text => printFunc(text);

const printTextInConsole = printText(console.log);

printTextInConsole('Hello currying');


function map(func, inputArray) {
    const result = [];
    for (let i = 0; i < inputArray.length; i++) {
        result.push( func(inputArray[i], i, inputArray) )
    }
    return result;
}

// console.log( map((x, i, a) => [x, i, a], ['abc', 'xyz']) );

// console.log( ['abc', 'xyz'].map((x, i, a) => [x, i, a]) )

function filter(func, inputArray) {
    const result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (func(inputArray[i], i, inputArray)) {
            result.push(inputArray[i])
        }
    }
    return result;
}

const arr = [1,2,3,4,5,7,8,'abc'];

console.log(arr.filter(Number))
console.log(filter(Number, arr))