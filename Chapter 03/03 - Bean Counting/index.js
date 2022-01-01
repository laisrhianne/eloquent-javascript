function countBs(string) {
  let count = 0;
  for(let char of string) {
    if(char === 'B') count++;
  }
  return count;
}

function countChar(string, char) {
  let count = 0;
  for(let stringChar of string) {
    if(stringChar === char) count++;
  }
  return count;
}

console.log(countBs('Banana'));
console.log(countChar('Banana', 'B'));