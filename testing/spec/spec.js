#!/usr/bin/env node

var webdriverio = require('webdriverio');
var jasmine = require('jasmine-node');


describe('webdriverio tests', function(){

  var client = {};
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 9999999;

  beforeEach(function(done) {
    var options = { desiredCapabilities: { browserName: 'phantomjs', 'phantomjs.cli.args': ['--web-security=no', '--ssl-protocol=any', '--ignore-ssl-errors=yes'] } };
    var client = webdriverio.remote(options);
    client.init(done);
  });

  if('test it', function () {

    client
        .init()
        .url('https://izaac.me')
        .getTitle().then(function(title) {
            console.log('Title is: ' + title);
            expect(title.toLowerCase()).toContain('izaac');
            done();
        })
        .pause(10000)
        .saveScreenshot('/home/izaac/screen.jpg')
        .getText('#home > div.row.banner > div > h3').then(function (text){
          console.log(text);
        })
        .call(done);

  });

  afterEach(function(done) {
    client.end(done);
  });

});
