const fs = require('fs');
const path = require('path');

const key = process.env.GOOGLE_MAPS_API_KEY;
if (!key) {
  console.error('ERROR: GOOGLE_MAPS_API_KEY environment variable is not set.');
  process.exit(1);
}

const filePath = path.join(__dirname, '../dist/map-locator.html');
let content = fs.readFileSync(filePath, 'utf8');
content = content.replaceAll('__GOOGLE_MAPS_API_KEY__', key);
fs.writeFileSync(filePath, content, 'utf8');
console.log('Injected GOOGLE_MAPS_API_KEY into dist/map-locator.html');
