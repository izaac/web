var webdriverio = require('webdriverio');
var jasmine = require('jasmine-node');
var chai = require('chai');
var assert = chai.assert;

describe('webdriverio tests', function(){
  var timerCallback;

  var client = {};

  beforeEach(function(done) {
    var options = { desiredCapabilities: { browserName: 'phantomjs', 'phantomjs.cli.args': ['--web-security=no', '--ssl-protocol=any', '--ignore-ssl-errors=yes'] } };
    client = webdriverio.remote(options);

  }, 30000);

  it('google search website', function () {

    client
        .init()
        .url('https://google.com')
        .getTitle().then(function(title) {
            console.log('Title is: ' + title);
            assert.include(title.toLowerCase(), 'google', "It contains google");
            done();
        });
        // .pause(10000)
        // .saveScreenshot('/home/izaac/screen.jpg')
        // .getText('#home > div.row.banner > div > h3').then(function (text){
        //   console.log(text);
        // })

  }, 20000);

  afterEach(function(done) {
    client.end();
  });

});
