# Functions

Functions are callable objects. It is very important to note that in JavaScript functions are objects. It might be misleading because when you use the `typeof` operator on a function, you get `function` as the output. This is one of the instances where JavaScript lies to you. The output of `typeof function () {}` should be `object` because functions are objects in JavaScript. That makes functions very powerful, because you can think of them as callable objects. You can use a function as an object, a piece of reusable code, or a function that creates objects.

## Creating Functions

There are two main ways of defining functions:

- function declaration
- function expression

If a statement starts with the `function` keyword, then you have a function declaration:

`function myFn() {}`

But if you assign a function to a variable, you have a function expression:

`const fnRef = function myFn() {};`

**Note** that you need a semi colon at the end of a function expression, but there are no semi colons at the end of function declarations.

## Function Inputs and Outputs

You can pass values into and return values from a function. For example, you can make a function that takes two numbers and `returns` the result of adding them:

```javascript
function add(a, b) {
  return a + b;
}
```

If you notice, the inputs to the function are placed inside the parenthesis separated by commas. Note that `a` and `b` represent the inputs to the function. If you don't specify any return values for your function, JavaScript will return `undefined` by default:

```javascript
function fn() {
  const a = 1;
  // other stuff.
  // no return.
}
fn(); // `undefined` is returned.
```
Note that arguments are always passed by value to functions. The value could be a primitive or a reference value in the case of non-primitives. This means that if you assign the argument to another value or thing, it will not affect the thing outside of the function:

```javascript
const n = 1;
function change(x) {
  x = 5;
}
console.log(n); // 1;
change(n);
console.log(n); // 1;
```

It doesn't matter what is passed in, the behavior is consistent, even if the input is a non-primitive (an object):

```javascript
const n = {value: 1};
function change(x) {
  x = {};
}
console.log(n); // {value: 1};
change(n);
console.log(n); // {value: 1};
```

However, if you decide to change the property of the object that the reference is pointing to, the object will be mutated:

```javascript
const n = {value: 1};
function mutate(x) {
  x.value = 22;
}
console.log(n); // {value: 1}
mutate(n);
console.log(n); // {value: 22}
```

As you can see, arguments passed to functions are always copied. In the case of primitives, the actual values are copied, and the case of non-primitives, the reference is copied and becomes available in the function and assigning the argument to another thing does not change the original value.


### The `arguments` Object

Every function in JavaScript has access to the magical `arguments` object inside the function body that contains the arguments passed to a function. Let's look at a basic example to demonstrate how you can access the `arguments` object.

In this example, we are going to create a function called `sum` that is going to simply return the `arguments` object when it is called:

```javascript
function sum() {
  return arguments;
}
```

When you call the function with `sum(1,2,3)`, you can see that `arguments` is an object with three keys and values:

```javascript
{
  '0': 0,
  '1': 1,
  '2': 2
}
```
So it is important to note that the `arguments` object is not an array object. This means that `arguments` does not inherit array methods and the following returns false:

```javascript
const args = sum(1,2,3);
Object.getPrototypeOf(args) === Array.prototype; // -> false
```

As of ES2015, you can use the `Array.from` method to convert an iterable object like the `arguments` object to an array. Alternatively, you can call the `slice` method of `Array.prototype` in the context of the `arguments` object to return an array containing the values:

```javascript
const args = sum(1,2,3);
const argArray = Array.prototype.slice.call(args); // -> [1,2,3]
Object.getPrototypeOf(argArray) === Array.prototype // -> true
```

## Executing a Function

A function can be executed. This is generally known as calling a function. You can call a function by using the name of the function, followed by `()`:

```javascript
add();
```

Notice that we are calling the functions without any inputs. Let's give the function to numbers as inputs:

```javascript
add(1,2); // -> 3
```

In addition to the `()` operator, there are 3 other ways to invoke a function. That is, using:

- `call`
- `apply`
- and the `new` keyword before invoking the function with `()`

So for our simple example, let's call the function using all these methods and explore when you would want to use each method.

### `Function.prototype.call`

When you use `call` to invoke a function, the first argument is the value of the context object. And the second argument is the parameters separated by commas:

```javascript
add.call({}, 1,2); // -> 3
```

### `Function.prototype.apply`

Using `apply` is similar to `call`, except instead of passing the arguments one by one separated by commas, you pass the arguments in an array:

```javascript
add.apply({}, [1,2]); // -> 3
```


### Calling Function with `new`

When a function is called with the `new` keyword, it is used as a function to create objects. These type of functions are called constructor functions and by convention, always start with an uppercase letter. When a function is called with the `new` keyword, 4 things happen behind the scene:

- A new empty object is created
- The context object `this` is bound to the new object
- The new object is linked to the function prototype vale
- `this` is automatically returned unless another value is returned explicitly from the function

Below, is a simple example demonstrating this case:

```javascript
function Car() {
  this.color = 'black';
}
const myCar = new Car();
myCar.color; // -> 'black'
```

### Context Object `this`

`this` is a dynamic object and is set depending on the way that you call function. There are several rules to follow in order to figure out what `this` is bound to.

First, check if the function of interest is called with the `new` keyword. If so, then `this` is bound to the new object created by the function. If not, check if the function is being called with `call` or `apply`, if so, the first argument tells you what the value of `this` is bound to. If not, check if the function is called in the context of another object, `(someObj.fn())`, if so, then `this` is bound to the object. If none of these cases are met and the function is simply invoked without any context, `this` will be bound to the global object in `non-strict` mode. However, in the `strict mode`, the value of `this` will be `undefined`.

**TODO**

more details and examples for `this`.....










## Functions as objects

You can use functions as plain objects:

```javascript
var fnRef = function fnObject () {};
fnRef.someProp = 'foo';
fnRef.hello = function () {
  return 'hello';
};
```

Note that you can then access the properties and methods of this function object:

```javascript
fnRef.someProp// -> 'foo'
fnRef.hello() // -> 'hello'
```

