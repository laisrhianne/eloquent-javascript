function flatten(array) {
    return array.reduce((ac, el) => {
        if (Array.isArray(el)) return ac.concat(...flatten(el));
        return ac.concat(el);
    }, []);
}

const array = [
    1,
    [2, 3, 4, [5, 6]],
    7,
    8,
    [9, 10]
]

console.log(flatten(array));