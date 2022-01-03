class PGroup {
  constructor(items) {
    this.items = [];
    for (let el of items) {
      if (!this.items.includes(el)) {
        this.items.push(el)
      }
    }
  }

  add(item) {
    if (this.has(item)) return this;
    return new PGroup([...this.items, item]);
  }

  delete(item) {
    if (this.has(item)) return new PGroup(this.items.filter((el) => el !== item));
    return this;
  }

  has(item) {
    return this.items.includes(item);
  }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));