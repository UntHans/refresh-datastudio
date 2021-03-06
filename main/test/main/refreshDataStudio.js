var page = require('../../page/elementsDataStudio.js');
var globals = require('../../../globals/globals.js');

module.exports = {
    'Refresh Data Studio Page': function(browser){


        browser
            .url("https://datastudio.google.com/navigation/reporting")
            .waitForElementVisible('body', 40000)
            .maximizeWindow();
        browser.page.elementsDataStudio()
            .waitForElementVisible('@GEInput', 10000)
            .click('@GEInput');
        browser.pause(2000);
        browser.page.elementsDataStudio()
            .setValue('@GEInput', globals.username)
            .click('@NextButton');
        browser.pause(2000);
        browser.page.elementsDataStudio()
            .waitForElementVisible('@GPInput', 10000)
            .click('@GPInput');
        browser.pause(2000);
        browser.page.elementsDataStudio()
            .setValue('@GPInput', globals.password)
            .click('@NextButton');
        browser
            .pause(1000)
            .url(globals.url);
        browser.pause(3000);
        browser.page.elementsDataStudio()
            .waitForElementVisible('@FuseDashboardLink', 10000)
            .click('@FuseDashboardLink');
        browser.pause(3000);
        browser.page.elementsDataStudio()
            .waitForElementVisible('@FuseDashboardTitle', 10000)
            .waitForElementVisible('@RefreshButton', 5000)
            .verify.elementPresent('@RefreshButton', 5000)
        browser.pause(2000);
        browser.page.elementsDataStudio()
            .click('@RefreshButton');
        browser.pause(5000);


        // for (x = 0; x < 1440; x++) {
        //
        // browser.pause(60000);
        // browser.page.elementsDataStudio()
        //     .assert.elementPresent('@RefreshButton', 5000)
        //     .click('@RefreshButton');
        // }


    },
};
