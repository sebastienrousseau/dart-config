const fs = require("fs");
const path = require("path");

const presets = ["analysis_options.yaml"];
const defaultPreset = "analysis_options.yaml";
const content = fs.readFileSync(path.join(__dirname, defaultPreset), "utf8");

module.exports = {
  name: "@sebastienrousseau/dart-config",
  version: "0.0.1",
  presets,
  defaultPreset,
  content
};
