function sumAll() {
  return [...arguments].map(x => Number(x) || 0).reduce((acc, x) => acc + x);
}

function multiplyAll() {
  return [...arguments].map(x => Number(x) || 1).reduce((prev, x) => prev * x);
}

console.log(multiplyAll(2, 3, 5, 10, "b"));

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

console.log(numberOccurances("2410023b8"));
