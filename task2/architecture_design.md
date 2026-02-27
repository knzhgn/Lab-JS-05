# Application Architecture Design — Todo List App (Lab 5.2)

## Modular Architecture Overview

**Application:** Todo List Manager

### Core Modules (always loaded via static imports)
- `app.mjs` — Main application, coordinates all modules
- `core.mjs` — Todo item data model and store
- `utils.mjs` — Helper functions (ID generation, date formatting)
- `constants.mjs` — Application-wide constants

### Feature Modules (loaded on demand via dynamic imports)
- `advanced_feature.mjs` — Statistics/analytics dashboard (loaded on button click — Import on Interaction)
- `lazy_component.mjs` — Bulk export feature (loaded when scrolled into view — Import on Visibility)

## Design Principles
Ch. 5, "The Importance of Decoupling Applications": modules have no direct knowledge of each other except through explicit imports, keeping dependencies clean and one-directional.
