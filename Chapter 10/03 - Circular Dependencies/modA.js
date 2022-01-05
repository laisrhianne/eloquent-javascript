const { average } = require('./modB');

const sum = (a, b) => a + b;
const message = (a, b) => `The average is ${average(a, b)}`

exports = { sum, message };