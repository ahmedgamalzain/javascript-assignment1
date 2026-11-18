# Part 2: Essay Questions

## 1. What is the difference between forEach and for...of? When would you use each?
`forEach` is an array method that runs a function on every item. You cannot stop it with `break` or skip items with `continue`.
`for...of` is a loop that works on any iterable. You can use `break`, `continue`, and `await` inside it.
I use `forEach` for simple tasks on every item, and `for...of` when I need to stop early, skip items, or wait for async code.

```js
[1, 2, 3].forEach((n) => console.log(n));
for (const n of [1, 2, 3]) {
  if (n === 2) break;
  console.log(n);
}
```

## 2. What is hoisting and the Temporal Dead Zone (TDZ)?
Hoisting means JavaScript moves declarations to the top of their scope before running the code. `var` is hoisted with the value `undefined`, and function declarations can be called before they are written.
`let` and `const` are also hoisted, but they cannot be used before their declaration line. This period is called the TDZ, and using the variable there throws a `ReferenceError`.

```js
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;
```

## 3. What are the main differences between == and ===?
`==` converts the types first and then compares the values. `===` compares both value and type without any conversion. `===` is safer, so it is the better choice.

```js
5 == "5";   // true
5 === "5";  // false
```

## 4. Explain how try-catch works and why it is important in async operations.
The code that may fail goes inside `try`. If an error happens, JavaScript jumps to `catch` and the program does not crash. `finally` runs at the end in all cases.
In async code, errors happen later, such as a failed API request. With `async/await`, `try-catch` can catch these errors. Without it, the app may crash or fail silently.

```js
async function getData() {
  try {
    const res = await fetch("https://api.example.com");
    return await res.json();
  } catch (err) {
    console.log("Error:", err.message);
  }
}
```

## 5. What's the difference between type conversion and coercion?
Type conversion is when the developer changes the type on purpose. Type coercion is when JavaScript changes the type automatically.

```js
Number("42"); 
"5" + 1;       
"5" - 1;   