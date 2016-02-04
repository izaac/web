var webdriverio = require('webdriverio');
var fs = require('fs');
var util = require('util');
var chai = require('chai');
var assert = chai.assert;

// var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
// var log_stdout = process.stdout;

// console.log = function(d) { //
//   log_file.write(util.format(d) + '\n');
//   log_stdout.write(util.format(d) + '\n');
// };

var options = { desiredCapabilities: { browserName: 'firefox'}};

describe('webdriverio tests', function(){

  it('login tcc', function () {

   return webdriverio
        .remote(options)
        .init()
        .url('https://tripwireinc.force.com/customers/home/home.jsp')
        .waitForVisible('#loginPage\:SiteTemplate\:siteLogin\:loginComponent\:loginForm\:loginButton', 30000)
        .setValue('#loginPage\:SiteTemplate\:siteLogin\:loginComponent\:loginForm\:username', process.env.TCCUSER)
        .setValue('#loginPage\:SiteTemplate\:siteLogin\:loginComponent\:loginForm\:password', process.env.TCCPASS)
        .click('#loginPage\:SiteTemplate\:siteLogin\:loginComponent\:loginForm\:loginButton')
        .waitForVisible('#tabBar', 30000)
        .click('#01rU00000005CP4_Tab')
        .waitForVisible('#hpeId', 30000)
        .pause(10000)
        .frame(3) // hpeId frame using the integer locator.
        .getSource().then(function(source){
          // console.log(source); // print the iframe source code
          console.log('inside frame');
        })
        .frameParent()
        .getHTML('body', function(err, html){
          console.log(html);
        })
        .pause(5000)
        .waitForVisible('#contentWrapper', 15000)
        .close()
        .end();

  });


});
