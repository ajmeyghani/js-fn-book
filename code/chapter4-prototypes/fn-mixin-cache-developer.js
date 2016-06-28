const personFns = (function() {
  function walk() {return 'Walking...';}
  function getName() {return this.name;}
  return function() {
    this.walk = walk;
    this.getName = getName;
    return this;
  };
}());

const workerFns = (function() {
  function work() {return 'working...';}
  return function() {
    this.work = work;
    return this;
  };
}());

const developerFns = (function() {
  function code() {return 'coding...';}
  return function() {
    this.code = code;
    return this;
  };
}());


/* Define the Developer type */
function Developer(name) {
  if (!(this instanceof Developer)) {
    return new Developer(name);
  }
  this.name = name;
  this.toString = function () {
    return this.name;
  };
}

/* apply each functionalities to
Developer's prototype */
[personFns, workerFns, developerFns].forEach(fn => {
  fn.call(Developer.prototype);
});

/* create an instance and call methods */
const dev = Developer('Amin');
console.log(dev.getName());
console.log(dev.walk());
console.log(dev.work());
console.log(dev.code());
console.log('Dev is: ' + dev);
