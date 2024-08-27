const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  // NOTE: Have changed angular.json file, 'outputPath' to 'dist' rather than 'dist/<application-name>'. If you are using default angular.json then for file paths below, add <application-name> in file path. Example - './dist/my-medium/runtime.js', do the same for all.
  const files = [
    './dist/runtime.js',
    './dist/polyfills.js',
    './dist/main.js'
  ];
  await fs.ensureDir('mfe');
  await concat(files, 'mfe/about-us-webcomponent.js');
  await fs.copyFile(
    './dist/styles.css',
    'mfe/styles.css'
  );
})();