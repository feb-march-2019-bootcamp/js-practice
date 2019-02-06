function sumAll() {
    return [...arguments]
        .map(x => Number(x) || 0)
        .reduce((acc, x) => acc + x);
}

function multiplyAll() {
    return [...arguments]
        .map(x => Number(x) || 1)
        .reduce((acc, x) => acc * x);
}

console.log(multiplyAll(2, 3, 5, 10, 'b'));