const { anyStorage } = require('../11_async');
const bigOak = require('../crow-tech').bigOak;

async function locateScalpel(nest) {
  let current = nest.name;
  let next;
  do {
    if (next) current = next;
    next = await anyStorage(nest, current, "scalpel");
  } while (next != current)
  return current;
}

function locateScalpel2(nest) {
  function loop(current) {
    return anyStorage(nest, current, "scalpel").then((next) => next == current ? current : loop(next));
  }
  return loop(nest.name);
}

locateScalpel2(bigOak).then(console.log);
// → Butcher Shop