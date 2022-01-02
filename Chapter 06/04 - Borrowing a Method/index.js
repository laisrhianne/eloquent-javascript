let map = { one: true, two: true, hasOwnProperty: true };

const hasProperty = Object.prototype.hasOwnProperty.call(map, "one");
console.log(hasProperty);