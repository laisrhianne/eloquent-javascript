function every(array, predicate) {
    for (let el of array) {
        if (!predicate(el)) return false;
    }
    return true;
}

function every2(array, predicate) {
    return !array.some((el) => !predicate(el));
}

const predicate = (value) => value < 10;
const array1 = [1, 2, 3];
const array2 = [1, 5, 13];

console.log(every(array1, predicate));
console.log(every(array2, predicate));
console.log(every2(array1, predicate));
console.log(every2(array2, predicate));