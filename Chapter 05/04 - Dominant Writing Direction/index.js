const SCRIPTS = require('./scripts');

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function writingDirectionDominance(string) {
    const writingDirectionCounter = {};
    for (let char of string) {
        const code = char.codePointAt(0);
        const script = characterScript(code);
        if (script && writingDirectionCounter[script.direction]) {
            writingDirectionCounter[script.direction]++;
        } else if (script) {
            writingDirectionCounter[script.direction] = 1;
        }
    }
    const dominant = Object.keys(writingDirectionCounter)
        .reduce((ac, key) => writingDirectionCounter[key] > writingDirectionCounter[ac] ? key : ac);
    return dominant;
}

console.log(writingDirectionDominance('Test'));
console.log(writingDirectionDominance('Hey, مساء الخير'));