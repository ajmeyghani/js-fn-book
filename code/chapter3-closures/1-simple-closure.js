function makeClosure() {
  'use strict';
  let stateVal = 0;
  function cl() {
    stateVal += 1;
    return stateVal;
  }
  return cl;
}

const inc = makeClosure();

inc();
inc();
const val = inc();

console.log(val);
