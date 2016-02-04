#!/usr/bin/env node
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'phantomjs', 'phantomjs.cli.args': ['--web-security=no', '--ssl-protocol=any', '--ignore-ssl-errors=yes'] } };
var client = webdriverio.remote(options);

client
    .init()
    .url('https://izaac.me')
    // .setValue('#search_form_input_homepage', 'WebdriverIO')
    // .click('#search_button_homepage')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
        // assert.include(title.toLowerCase(), 'izaac', "It contains "+title);
        console.log('Testing the title with chai');
        expect(title.toLowerCase()).to.contain('izaac');
        console.log('Testing the title with chai: PASSED');
    })
    .waitUntil(function(){
      return this.getText('#home > div.row.banner > div > h3').then(function (text){
        console.log(text);
        return text.includes('Hobbyist');
      });
    })
    .waitForVisible('#home > div.row.banner > div > h3', 8000)
    .then(
      client.saveScreenshot('D:\\screen.jpg')
    )
.end();
