class Vec {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        return new Vec(this.x + vector.x, this.y + vector.y);
    }

    minus(vector) {
        return new Vec(this.x - vector.x, this.y - vector.y);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

const vec1 = new Vec(1, 1);
const vec2 = new Vec(3, 4);
const vec3 = vec1.plus(vec2);
const vec4 = vec2.minus(vec1);
console.log(vec1.length);
console.log(vec2.length);
console.log(vec3.length);
console.log(vec4.length);