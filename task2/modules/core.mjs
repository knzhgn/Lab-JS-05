// core.mjs — Core todo store
// Default export (single primary export) — Ch. 5, "Modules with Imports and Exports"

import { generateId, formatDate } from './utils.mjs';
import { MAX_TODOS, PRIORITY } from './constants.mjs';

class TodoStore {
  #todos = [];

  add(text, priority = PRIORITY.MEDIUM) {
    if (this.#todos.length >= MAX_TODOS) throw new Error('Maximum todos reached');
    const todo = { id: generateId(), text, priority, done: false, createdAt: formatDate() };
    this.#todos.push(todo);
    return todo;
  }

  complete(id) {
    const todo = this.#todos.find(t => t.id === id);
    if (todo) todo.done = true;
    return todo;
  }

  remove(id) {
    this.#todos = this.#todos.filter(t => t.id !== id);
  }

  getAll() { return [...this.#todos]; }
  getActive() { return this.#todos.filter(t => !t.done); }
  getDone() { return this.#todos.filter(t => t.done); }
}

// Default export
export default new TodoStore();
