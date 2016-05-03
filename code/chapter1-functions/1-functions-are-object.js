/**
 * Functions are objects in JavaScript. Don't be misled by
 * the `typeof` operator when called on a function.
 * Try `typeof function () {};`. It will return 'function' which
 * is not quite accurate because functions are objects in JavaScript.
 * Even though the output is not accurate, it is very useful when you
 * want to check for example if a function was passed as a parameter.
 */

var fn = function () {};
typeof fn; // -> 'function'

var fnRef = function fnObject () {};
fnRef.someProp = 'foo';
fnRef.hello = function () {
  return 'hello';
};

fnRef.someProp// -> 'foo'
fnRef.hello() // -> 'hello'
