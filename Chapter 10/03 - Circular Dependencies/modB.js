const { sum } = require('./modA');

const average = (a, b) => sum(a, b) / 2;

exports = { average };