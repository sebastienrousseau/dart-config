---
title: "Usage — @sebastienrousseau/dart-config"
description: "How to use and configure @sebastienrousseau/dart-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/dart-config` can be consumed across all standard module formats.

## CommonJS

```javascript
const config = require("@sebastienrousseau/dart-config");
console.log(config.presets);
```

## ES Modules

```javascript
import config from "@sebastienrousseau/dart-config";
console.log(config.defaultPreset);
```
