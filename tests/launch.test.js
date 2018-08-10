const config = require('config');
// const Stats = require('../../lib/stats');
const buildUrl = require('../lib/build-url');

describe('Forced Migration Stats Test', () => {
  let page;

  beforeEach(async () => {
    page = await browser.newPage();
    // page.setUserAgent(config.get('devices.amazon'));

    // let stats = new Stats(page);
    // await stats.attach();
  });

  afterEach(async () => {
    await page.close();
  });

  it('Validate the application launched [`launch`]', async () => {
    let url = buildUrl();
    // await page.spyOnComscoreStats();
    // await page.goto(url, { waitUntil: 'networkidle0' });
    //
    // let actual = page.getStatsRequestParams();
    //
    // let expected = {
    //   'name': 'iplayer.load.page',
    //   'forced_migration': 'true',
    //   'new_domain': 'true'
    // };
    //
    // expect(actual).toHaveValuesInAny(expected);
    await page.goto(url, { waitUntil: 'networkidle0' });

    // await page.waitForNavigation({waitUntil: 'networkidle2'});

    await page.screenshot({path: 'home.png', fullPage: true});

    await browser.close();
  });
});
