// utils.mjs — Utility functions module
// Ch. 5, "Module Objects" — imported as: import * as Utils from './utils.mjs'
// Ch. 5, "Classes with Constructors, Getters, and Setters"

import { CURRENCY } from './config.mjs';

/**
 * Format a numeric amount as a currency string
 * Uses template literals (modern replacement for string concatenation)
 */
export const formatPrice = (amount, currency = CURRENCY) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);

/**
 * Validate that a value is a positive number
 */
export const isPositiveNumber = (value) =>
  typeof value === 'number' && value > 0 && isFinite(value);
