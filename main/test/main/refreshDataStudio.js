var page = require('../../page/elementsDataStudio.js');
var upu = require('../upu/upu.js');

module.exports = {
    'Refresh Data Studio Page': function(browser){


        browser
            .url("https://datastudio.google.com/reporting")
            .waitForElementVisible('body', 40000)
            .maximizeWindow();
        browser.page.elementsDataStudio()
            .waitForElementVisible('@GEInput', 10000)
            .click('@GEInput');
        browser.pause(2000);
        browser.page.elementsDataStudio()
            .setValue('@GEInput', upu.u)
            .click('@NextButton');
        browser.pause(2000);
        browser.page.elementsDataStudio()
            .waitForElementVisible('@GPInput', 10000)
            .click('@GPInput');
        browser.pause(2000);
        browser.page.elementsDataStudio()
            .setValue('@GPInput', upu.p)
            .click('@NextButton');
        browser
            .pause(1000)
            .url(upu.u1);
        browser.pause(3000);
        browser.page.elementsDataStudio()
            .waitForElementVisible('@FuseDashboardLink', 10000)
            .click('@FuseDashboardLink');
        browser.pause(3000);
        browser.page.elementsDataStudio()
            .waitForElementVisible('@FuseDashboardTitle', 10000)
            .waitForElementVisible('@RefreshButton', 5000)
            .verify.elementPresent('@RefreshButton', 5000)
            .click('@RefreshButton');
        browser.pause(10000);

        console.log("Data Studio Refreshed");

        // for (x = 0; x < 1440; x++) {
        //
        // browser.pause(60000);
        // browser.page.elementsDataStudio()
        //     .assert.elementPresent('@RefreshButton', 5000)
        //     .click('@RefreshButton');
        // }


    },
};
