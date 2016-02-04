#!/usr/bin/env node

var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'phantomjs', 'phantomjs.binary.path': '/home/izaac/node_modules/phantomjs/bin/phantomjs' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('https://duckduckgo.com/')
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
.end();
