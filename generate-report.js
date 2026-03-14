const { generate } = require('@cucumber/html-formatter');
const fs = require('fs');
const path = require('path');

const jsonReport = path.join(__dirname, 'cucumber-report.json');
const htmlReport = path.join(__dirname, 'cucumber-report.html');

if (fs.existsSync(jsonReport)) {
  const json = JSON.parse(fs.readFileSync(jsonReport, 'utf8'));
  const html = generate(json);
  fs.writeFileSync(htmlReport, html);
  console.log('HTML report generated at', htmlReport);
} else {
  console.log('JSON report not found');
}