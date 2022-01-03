class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(a, b) {
  error = Math.random() < 0.8;
  if (error) {
    throw new MultiplicatorUnitFailure('Error during multiplication');
  }
  return a * b;
}

function multiplyAB(a, b) {
  let result = 0;
  for (; ;) {
    try {
      result = primitiveMultiply(a, b);
      break;
    }
    catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        console.log('Error ocurred, please try again');
      } else {
        throw e;
      }
    }
  }
  return result;
}

console.log(multiplyAB(5, 6));