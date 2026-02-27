// app.mjs — Main application
// Demonstrates static imports and dynamic imports
// Ch. 5, "Static Imports" and "Dynamic Imports"

// Static imports — eagerly loaded at startup
import todoStore from './core.mjs';                         // Default import
import { formatDate, capitalize } from './utils.mjs';       // Named imports
import * as Constants from './constants.mjs';               // Module object

console.log(`=== ${Constants.APP_NAME} ===`);
console.log(`Max todos: ${Constants.MAX_TODOS}`);

// Add some todos
const t1 = todoStore.add('Buy groceries', 'high');
const t2 = todoStore.add('Read JavaScript book', 'medium');
const t3 = todoStore.add('Go for a walk', 'low');
todoStore.complete(t1.id);

console.log('\n--- Active Todos ---');
todoStore.getActive().forEach(t => console.log(`[ ] ${capitalize(t.priority)}: ${t.text}`));
console.log('\n--- Completed ---');
todoStore.getDone().forEach(t => console.log(`[x] ${t.text}`));

// ─── Dynamic Import: Import on Interaction ───────────────────────────────
// Simulates user clicking "Show Stats" button
async function onShowStatsClick() {
  console.log('\n[Button clicked] Loading stats module...');

  try {
    // Dynamic import — module is downloaded only when user clicks
    const { generateStats, renderStats } = await import('./advanced_feature.mjs');
    const stats = generateStats(todoStore);
    console.log('\n' + renderStats(stats));
  } catch (err) {
    console.error('Failed to load stats module:', err.message);
  }
}

// ─── Dynamic Import: Import on Visibility ────────────────────────────────
// Simulates IntersectionObserver triggering when export section scrolls into view
async function onExportVisible() {
  console.log('\n[Export section visible] Loading export module...');

  try {
    // Dynamic import — module is downloaded only when component is visible
    const { exportToCSV } = await import('./lazy_component.mjs');
    const csv = exportToCSV(todoStore.getAll());
    console.log('\n--- CSV Export Preview (first 200 chars) ---');
    console.log(csv.slice(0, 200) + '...');
  } catch (err) {
    console.error('Failed to load export module:', err.message);
  }
}

// Run both dynamic import scenarios
await onShowStatsClick();
await onExportVisible();
