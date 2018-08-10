const puppeteer = require('puppeteer');
const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');
const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function () {
  const browserConfig = {
    ignoreHTTPSErrors: true,
    headless: !(process.env.OPEN_BROWSER === 'true'),
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  };
  const browser = await puppeteer.launch(browserConfig);
  global.__BROWSER__ = browser;
  mkdirp.sync(DIR);
  fs.writeFileSync(
        path.join(DIR, 'wsEndpoint'),
        browser.wsEndpoint()
    );
};

process.env.NODE_CONFIG_DIR = path.join(__dirname, '/../config/');
