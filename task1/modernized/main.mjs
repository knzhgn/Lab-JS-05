// main.mjs — Application entry point
// Ch. 5, "Static Imports" — all imports are eagerly loaded

import { Product, Cart } from './core.mjs';
import * as Utils from './utils.mjs';   // Module Object pattern (Ch. 5)
import { CURRENCY } from './config.mjs';

// const replaces var — block-scoped, immutable binding
const cart = new Cart();
const widget = new Product(1, 'Widget', 10.99);
const gadget = new Product(2, 'Gadget', 24.99);

// Fluent API via method chaining
cart.addItem(widget, 2).addItem(gadget, 1);

// Template literals replace string concatenation
console.log(`Currency: ${CURRENCY}`);
console.log(`Subtotal: ${Utils.formatPrice(cart.getSubtotal())}`);
console.log(`Tax:      ${Utils.formatPrice(cart.getTax())}`);
console.log(`Total:    ${Utils.formatPrice(cart.getTotal())}`);
