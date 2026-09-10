# `@sebastienrousseau/dart-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/dart-config`.

---

## Description

Shareable Dart and Flutter configuration standards providing strict analysis_options.yaml linter presets.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/dart-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. analysis_options.yaml

- **Description**: Hardened linter rules enforcing strict casts, inference, avoid_empty_else, and prefer_const_constructors.
- **Scope**: Production & Development
- **Status**: Stable & Active
