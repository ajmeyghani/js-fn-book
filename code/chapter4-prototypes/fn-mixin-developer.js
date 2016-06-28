/* Define Person's functionalities */
function personFns() {
  this.walk = function () {
    return 'Walking ...';
  };
  this.getName = function () {
    return this.name;
  };
}

/* Define Worker's functionalities */
function workerFns() {
  this.work = function () {
    return 'Working ...';
  };
}

/* Define Developer's functionalities */
function developerFns() {
  this.code = function () {
    return 'Coding ...';
  };
}

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
