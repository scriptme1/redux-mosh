import { add } from 'lodash';

function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(1)(5));
add(1); // returns a function so that we can pass our second argument as (5)

const add2 = a => b => a + b; // is the same as (a,b) => a + b;
