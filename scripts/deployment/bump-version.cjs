// bump-version.js
const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '../../package.json');
const packageJson = require(packageJsonPath);

let newVersion = process.argv[2];

if (!newVersion) {
  // If no version provided, bump the minor version
  const versionParts = packageJson.version.split('.');
  versionParts[2] = parseInt(versionParts[2], 10) + 1; // Increment the patch version
  newVersion = versionParts.join('.');
}

console.log(newVersion); // Output the new version