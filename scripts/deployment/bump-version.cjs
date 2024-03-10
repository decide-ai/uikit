// bump-version.js
const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '../../package.json');
const packageJson = require(packageJsonPath);

let newVersion = process.argv[2]; // Get version from command line argument

if (!newVersion) {
  // If no version provided, bump the minor version
  const versionParts = packageJson.version.split('.');
  versionParts[1] = parseInt(versionParts[1], 10) + 1; // Increment minor version
  newVersion = versionParts.join('.');
}

// Update package.json with the new version
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

console.log(newVersion); // Output the new version