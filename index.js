const iife1 = require('./lib/iife');
const iife2 = require('./lib/iife');

const createClosureCounter = require('./lib/closure');
const cCounter1 = createClosureCounter();
const cCounter2 = createClosureCounter();


console.log("Testing iife counter");

console.log('Increasing IIFE counter 1');
iife1.increase();
displayCounters(iife1, iife2);

console.log('Increasing IIFE counter 1');
iife1.increase();
displayCounters(iife1, iife2);

console.log('Increasing IIFE counter 2');
iife2.increase();
displayCounters(iife1, iife2);


console.log('Testing Closure Counter');

console.log('Increasing closure counter 1');
cCounter1.increase();
displayCounters(cCounter1, cCounter2);

console.log('Increasing closure counter 1');
cCounter1.increase();
displayCounters(cCounter1, cCounter2);

console.log('Increasing closure counter 2');
cCounter2.increase();
displayCounters(cCounter1, cCounter2);




function displayCounters(c1, c2) {
    console.log(`Counter 1: ${c1.getValue()}, Counter 2: ${c2.getValue()}`);
}




