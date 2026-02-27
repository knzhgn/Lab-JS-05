# Legacy Code Analysis — Lab 5.1

## Legacy Patterns Identified (Ch. 5, "Modern JavaScript Syntax and Features")

| Issue | Location | Modern Replacement |
|-------|----------|-------------------|
| `var` instead of `const`/`let` | All variable declarations | `const` by default, `let` for reassignment |
| No module system (global scope) | Entire file | ES6 Modules with `import`/`export` |
| Constructor function | `function Product(...)`, `function Cart()` | ES6 `class` with `constructor` |
| Prototype mutation | `Cart.prototype.addItem = function(...)` | Class methods |
| No private fields | All properties public via `this.x` | Private fields with `#` prefix |
| String concatenation | `currency + " " + amount.toFixed(2)` | Template literals |
| `for` loop with index | `for (var i = 0; ...)` | `Array.reduce()` or `for...of` |

## Impact
All code in global scope risks naming conflicts. No encapsulation — `taxRate` can be overwritten by any script. `var` has function-level (not block-level) scope, causing subtle bugs in loops.
