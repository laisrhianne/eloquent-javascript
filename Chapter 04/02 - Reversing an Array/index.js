function reverseArray(array) {
  const newArray = [];
  array.forEach((el) => newArray.unshift(el));
  return newArray;
}

function reverseArrayInPlace(array) {
  for(let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

const array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));
reverseArrayInPlace(array);
console.log(array);