const fs = require("fs");

// Path to the serve.json file
const serveJsonPath = "web-build/serve.json";

// Specify the rewrites you want to add
const rewrites = [
  { source: "/**", destination: "/index.html" },
  // Add more rewrite rules as needed
];

// Read the existing serve.json file
let serveJson = {};
try {
  serveJson = JSON.parse(fs.readFileSync(serveJsonPath, "utf8"));
} catch (error) {
  // If the serve.json file doesn't exist, create an empty object
  serveJson = {};
}

// Add the rewrites to the serve.json file
serveJson.rewrites = rewrites;

// Write the updated serve.json file
fs.writeFileSync(serveJsonPath, JSON.stringify(serveJson, null, 2), "utf8");
