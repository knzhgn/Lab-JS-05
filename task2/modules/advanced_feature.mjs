// advanced_feature.mjs — Statistics module
// Loaded dynamically on button click (Import on Interaction — Ch. 5, "Dynamic Imports")

export function generateStats(store) {
  const all = store.getAll();
  const done = store.getDone();
  const active = store.getActive();

  return {
    total: all.length,
    completed: done.length,
    active: active.length,
    completionRate: all.length ? `${Math.round((done.length / all.length) * 100)}%` : '0%',
    byPriority: {
      high: all.filter(t => t.priority === 'high').length,
      medium: all.filter(t => t.priority === 'medium').length,
      low: all.filter(t => t.priority === 'low').length,
    },
  };
}

export function renderStats(stats) {
  return `
=== Todo Statistics ===
Total: ${stats.total} | Active: ${stats.active} | Done: ${stats.completed}
Completion rate: ${stats.completionRate}
By priority — High: ${stats.byPriority.high}, Medium: ${stats.byPriority.medium}, Low: ${stats.byPriority.low}
  `.trim();
}
