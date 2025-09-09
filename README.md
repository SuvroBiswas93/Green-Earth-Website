
## ❓ What is the difference between var, let, and const?

- **var** -> Can be **reassigned** and **redeclared**. It is **hoisted**.  
-  `var` is **function-scoped** (not block-scoped).  
-  If declared outside of any function, it becomes **global-scoped**.

- **let** -> Can be **reassigned** but **cannot be redeclared** in the same scope.  
-  `let` is **block-scoped** (block ->`{}` ).  
-   It is also hoisted, but **not initialized** (Temporal Dead Zone).

- **const** -> **Cannot be reassigned** and **cannot be redeclared**.  
-  Like `let`, it is **block-scoped** and hoisted (with Temporal Dead Zone).
-  If assigned to an object or array, the contents can still be **mutated**


---

## ❓ What is the difference between map(), forEach(), and filter()?

- **map()** -> Transforms each element and returns a **new array**. 

```js
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2); // [2, 4, 6]
```
- **forEach()** -> Runs a function on each element but **does not return** a new array.

```js
let nums = [1, 2, 3];
nums.forEach(n => console.log(n * 2)); // Logs 2, 4, 6 (no return)
```

-**filter()** -> Returns a new array with elements that pass a condition.

```js
let nums = [1, 2, 3, 4];
let evens = nums.filter(n => n % 2 === 0); // [2, 4]
```

---

## ❓ What are arrow functions in ES6?

- Arrow functions are a shorter way to write functions in JavaScript.  
- They don’t need the `function` keyword.  
- They **do not have their own `this`**, they inherit **`this`** from their **lexical/parent** scope.  

```js
// Regular function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// Arrow function (shorter)
const addArrow = (a, b) => a + b;
console.log(addArrow(2, 3)); // 5

```

---

## ❓  How does destructuring assignment work in ES6?

- Destructuring allows to **unpack values** from arrays or objects into variables easily.
- It is an ES-6 Feature

### Array Destructuring

```js
const numbers = [1, 2];

// old way
const a = numbers[0];
const b = numbers[1];

// ES6 destructuring
const [x, y] = numbers;
console.log(x); // 1
console.log(y); // 2

```

### Object Destructuring

```js
const person = { name: "Suvro Biswas", age: 27 };

// Old way
let name1 = person.name;
let age1 = person.age;

// ES6 destructuring
let { name, age } = person;
console.log(name, age);

```

---

## ❓ Explain template literals in ES6. How are they different from string concatenation?

- 


