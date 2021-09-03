// -- Callback function
// A callback function is a function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.

function greeting(name) {
    alert('Hello ' + name);
}
function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}
processUserInput(greeting);

// Create Promises
// A pending promise can either be fulfilled with a value or rejected with a reason (error). 
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });
  
// resolve runs the first function in .then
myPromise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
  .then(handleResolvedC, handleRejectedC);

promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
);

// -- Promise.all
// Promise.all waits for all fulfillments (or the first rejection).

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then(values => {
    console.log(values); // [3, 1337, "foo"]
});

// -- Async function
// Note: The purpose of async/await is to simplify the syntax necessary to consume promise-based APIs. 
// The behavior of async/await is similar to combining generators and promises.
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();


//   For example, the following:

async function foo() {
   return 1
}
// ...is similar to:

function foo() {
   return Promise.resolve(1)
}