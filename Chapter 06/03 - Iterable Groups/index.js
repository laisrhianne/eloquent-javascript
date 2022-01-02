const Group = require('../02 - Groups');

class GroupIterator {
  constructor(group) {
    this.i = 0;
    this.items = group.items;
  }

  next() {
    if (this.items.length === this.i) return { done: true };
    const value = this.items[this.i];
    this.i++;
    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}