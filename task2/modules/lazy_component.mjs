// lazy_component.mjs — Bulk Export feature
// Loaded dynamically when scrolled into view (Import on Visibility — Ch. 5, "Dynamic Imports")

export function exportToCSV(todos) {
  const header = 'ID,Text,Priority,Done,Created';
  const rows = todos.map(t =>
    `"${t.id}","${t.text}","${t.priority}","${t.done}","${t.createdAt}"`
  );
  return [header, ...rows].join('\n');
}

export function exportToJSON(todos) {
  return JSON.stringify(todos, null, 2);
}
