// bump-version.js
const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '../../package.json');
const packageJson = require(packageJsonPath);

let newVersion = process.argv[2];

if (!newVersion) {
  // If no version provided, bump the minor version
  const versionParts = packageJson.version.split('.');
  versionParts[1] = parseInt(versionParts[1], 10) + 1;
  newVersion = versionParts.join('.');
}


packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

console.log(newVersion); // Output the new version