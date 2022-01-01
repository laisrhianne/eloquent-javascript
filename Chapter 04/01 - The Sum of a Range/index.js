function range(start, end, step = 1) {
  const array = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  return array.reduce((ac, el) => ac + el);
}

console.log(sum(range(1,10)));
console.log(range(5, 2, -1));
