// core.mjs — Core business logic module
// Ch. 5, "Classes with Constructors, Getters, and Setters"
// Demonstrates: ES6 classes, private fields (#), getters, const/let

import { TAX_RATE } from './config.mjs';
import { isPositiveNumber } from './utils.mjs';

/**
 * Product class — ES6 class replaces constructor function + prototype methods
 * Private fields (#) replace all-public this.x properties
 */
export class Product {
  // Private fields — only accessible within this class (Ch. 5)
  #id;
  #name;
  #price;

  constructor(id, name, price) {
    if (!isPositiveNumber(price)) throw new RangeError(`Invalid price: ${price}`);
    this.#id = id;
    this.#name = name;
    this.#price = price;
  }

  // Getters provide controlled read access to private fields
  get id() { return this.#id; }
  get name() { return this.#name; }
  get price() { return this.#price; }
}

/**
 * Cart class — ES6 class with private state
 * Replaces: Constructor function + scattered prototype.method definitions
 */
export class Cart {
  #items = [];          // Private — replaces public this.items
  #taxRate;

  constructor(taxRate = TAX_RATE) {
    this.#taxRate = taxRate;
  }

  addItem(product, quantity = 1) {
    if (!(product instanceof Product)) throw new TypeError('Expected Product');
    if (!isPositiveNumber(quantity)) throw new RangeError('Invalid quantity');
    this.#items.push({ product, quantity });
    return this; // Fluent API — allows chaining
  }

  // Arrow function inside method — consistent this binding
  getSubtotal = () =>
    this.#items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);

  getTax = () => this.getSubtotal() * this.#taxRate;

  getTotal = () => this.getSubtotal() + this.getTax();

  // Returns a copy — prevents external mutation of private items
  get items() { return [...this.#items]; }
}
