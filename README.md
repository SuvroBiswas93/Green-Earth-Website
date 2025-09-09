
## ❓ What is the difference between var, let, and const?

- **var** → Can be **reassigned** and **redeclared**. It is **hoisted**.  
  `var` is **function-scoped** (not block-scoped).  
  If declared outside of any function, it becomes **global-scoped**.

- **let** → Can be **reassigned** but **cannot be redeclared** in the same scope.  
  `let` is **block-scoped** (limited to `{}` blocks like if/for).  
  It is also hoisted, but **not initialized** (Temporal Dead Zone).

- **const** → **Cannot be reassigned** and **cannot be redeclared**.  
  Like `let`, it is **block-scoped** and hoisted (with Temporal Dead Zone).
  If assigned to an object or array, the contents can still be **mutated**


---

## ❓ What is the difference between map(), forEach(), and filter()?

- **map()** → Transforms each element and returns a **new array**. 

```js
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2); // [2, 4, 6]
```
- **forEach()** → Runs a function on each element but **does not return** a new array.

```js
let nums = [1, 2, 3];
nums.forEach(n => console.log(n * 2)); // Logs 2, 4, 6 (no return)
```

---

## ❓ What are arrow functions in ES6?



---

## ❓  How does destructuring assignment work in ES6?

- Works because of **event bubbling**.  


---

## ❓ Explain template literals in ES6. How are they different from string concatenation?

- 


