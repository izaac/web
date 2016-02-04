var webdriver = require('selenium-webdriver'),
  By = require('selenium-webdriver').By,
  until = require('selenium-webdriver').until;
var phantomjs = require('phantomjs');

describe('webdriver tests', function() {
  // var options = { desiredCapabilities: { browserName: 'phantomjs', 'phantomjs.cli.args': ['--web-security=no', '--ssl-protocol=any', '--ignore-ssl-errors=yes'] } };
  var caps = webdriver.Capabilities.phantomjs();
  caps.set(webdriver.Capability.ACCEPT_SSL_CERTS, true);
  caps.set(webdriver.Capability.SECURE_SSL, false);
  caps.set('phantomjs.cli.args', ['--web-security=no', '--ssl-protocol=any', '--ignore-ssl-errors=yes']);
  console.log(caps);

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 9999999;

  beforeEach(function(done) {
    this.driver = new webdriver.Builder()
      //.withCapabilities(webdriver.Capabilities.chrome())
      .withCapabilities(caps)
      .usingServer('http://127.0.0.1:4444/wd/hub')
      .forBrowser('phantomjs')
      .build();
    // console.log(this.driver);
    this.driver.get('http://google.com').then(done);
  });

  it('izaac.me website', function(done) {

    this.driver.wait(function() {
      console.log('waiting');
      until.titleIs('Google');
      // this.driver.isElementPresent(By.tag('#home > div.row.banner > div > h3'));
    }, 10000);
    // this.driver.getTitle().then(function(title){
    //   expect(title.toLowerCase()).toContain('izaac');
    // });

    done();

  });

  afterEach(function(done) {
    this.driver.quit().then(done);
  });

});