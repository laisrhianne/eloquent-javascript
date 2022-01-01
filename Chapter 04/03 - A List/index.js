function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  const array = [];
  if (list && list.value) array.push(list.value, ...listToArray(list.rest));
  return array;
}

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if (!list) return undefined;
  if (n === 0) return list.value;
  return nth(list.rest, n-1);
}

const list = arrayToList([1, 2, 3]);
const array = listToArray(list);
const num = nth(list, 2);
console.log(array);
console.log(num);