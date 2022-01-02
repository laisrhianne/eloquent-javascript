function loop(value, test, update, body) {
    let i = value;
    while (test(i)) {
        body(i);
        i = update(i);
    }
}

function loop2(value, test, update, body) {
    if (test(value)) {
        body(value);
        loop2(update(value), test, update, body);
    }
}

const value = 0;
const test = (value) => value < 10;
const update = (value) => value + 1;

loop2(value, test, update, console.log);