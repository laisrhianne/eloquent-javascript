function deepEqual(value1, value2) {
  if (typeof value1 !== typeof value2) return false;
  if (value1 === value2) return true;
  if (typeof value1 === 'object' && value1 !== null && value2 !== null) {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);
    if (keys1.join('') !== keys2.join('')) return false;
    const equalityArray = keys1.map((key) => {
      return deepEqual(value1[key], value2[key]);
    });
    if (equalityArray.includes(false)) return false;
    return true;
  }
  return false;
}

const obj1 = { a: { b: 5 }, c: 3 };
const obj2 = { a: { b: 5 }, c: 3 };
const obj3 = { a: { b: 10 }, c: 3 };
const obj4 = { a: { b: 5 }, c: 2 };
const num1 = 15;
const num2 = 15;
const num3 = 150;


console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
console.log(deepEqual(obj1, obj4)); // false

console.log(deepEqual(num1, num2)); // true
console.log(deepEqual(num1, num3)); // false
