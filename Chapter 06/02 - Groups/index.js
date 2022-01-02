class Group {
  items;
  constructor() {
    this.items = [];
  }

  add(item) {
    if (!this.has(item)) this.items.push(item);
  }

  delete(item) {
    if (this.has(item)) this.items.splice(this.items.findIndex((el) => el === item), 1);
  }

  has(item) {
    return this.items.findIndex((el) => el === item) !== -1;
  }

  static from(array) {
    const group = new Group();
    for (let el of array) {
      group.add(el);
    }
    return group;
  }
}

/* const group = new Group();
const group2 = Group.from([10, 20, 30]);
group.add(1);
group.add(2);
// group.delete(1);
console.log(group.has(1));
console.log(group.has(3));
console.log(group2.has(30));
console.log(group2.has(40)); */

module.exports = Group;
