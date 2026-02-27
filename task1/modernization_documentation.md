# Modernization Documentation — Lab 5.1

## Changes Made

### 1. `var` → `const`/`let`
All `var` declarations replaced with `const` (for values that don't change) or `let` (for loop variables). `const` prevents accidental reassignment and communicates intent. Reference: Ch. 5, "Modern JavaScript Syntax and Features".

### 2. No modules → ES6 Modules
Split into `config.mjs`, `utils.mjs`, `core.mjs`, `main.mjs`. Each module has a clear responsibility. Reference: Ch. 5, "Modules with Imports and Exports".

### 3. Constructor functions → ES6 Classes
`function Product(...)` and `function Cart()` replaced with `class Product` and `class Cart`. All methods defined inside the class body. Reference: Ch. 5, "Classes with Constructors, Getters, and Setters".

### 4. Public properties → Private fields
`this.price` → `#price` (private). External code cannot read or write `product.#price`. Getters provide controlled read access. Reference: Ch. 5, "Classes with Constructors, Getters, and Setters".

### 5. String concatenation → Template literals
`currency + " " + amount.toFixed(2)` → `` `${currency} ${amount.toFixed(2)}` ``

### 6. `for` loop → `Array.reduce()`
Functional approach is more readable and avoids index variables.
