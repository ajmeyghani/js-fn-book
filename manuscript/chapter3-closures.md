# Closures

Generally speaking, a closure is a dynamic reference that is created when an inner function uses variables of an outer function. And to use the closure, the inner function is returned and when closure is called, the variables maintain their previous value state. Let's demonstrate this with a simple example. First, we need an outer function that defines a variable called `stateVal`:

```javascript
function makeClosure() {
  let stateVal = 0;
}
```

After that, we need to create a another function inside that references `stateVal`:

```javascript
function makeClosure() {
  let stateVal = 0;
  function cl() {
    stateVal += 1;
    return stateVal;
  }
}
```

and then, to access the closure function, we need to return it from `makeClosure`:

```javascript
function makeClosure() {
  let stateVal = 0;
  function cl() {
    stateVal += 1;
    return stateVal;
  }
  return cl;
}
```

Now that we have our closure maker function, we can call it and get access to the closure function inside:

```javascript
const inc = makeClosure();
```

Note that `inc` is a closure because it references the `stateVal` variable inside the outer function, so `stateVal` maintains its state every time `inc` is called. So if we call the `inc` function 3 times, we expect the value of `stateVal` to be three at the end:

```javascript
inc();
inc();
const val = inc();
```

At the end of the last `inc` call, the value returned is going to be `3`.

**TODO** more coming soon ...

