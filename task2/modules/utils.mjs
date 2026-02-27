// utils.mjs — Shared utility functions
// Named exports — Ch. 5, "Modules with Imports and Exports"

export const generateId = () => `todo_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

export const formatDate = (date = new Date()) =>
  date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
