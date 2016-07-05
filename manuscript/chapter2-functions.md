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

## Function Inputs

You can pass in values to a function. For example, you can make a function that takes two numbers and `returns` the result of adding them:

```javascript
function add(a, b) {
  return a + b;
}
```

If you notice, the inputs to the function are placed inside the paranthesis separated by commas. Note that `a` and `b` represnt the inputs to the function.

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

**TODO**

### `Function.prototype.apply`

**TODO**

### Calling Function with `new`

**TODO**








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

