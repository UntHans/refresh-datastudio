var page = require('../../page/elementsDataStudio.js');
var upu = require('../upu/upu.js');

module.exports = {
    'Refresh Data Studio Page': function(browser){


        browser
            .url("https://datastudio.google.com/reporting")
            .waitForElementVisible('body', 40000)
            .maximizeWindow();
        browser.page.elementsDataStudio()
            .waitForElementVisible('@GoogleEmailInput', 10000)
            .click('@GoogleEmailInput');
        browser.pause(2000);
        browser.page.elementsDataStudio()
            .setValue('@GoogleEmailInput', upu.u)
            .click('@NextButton');
        browser.pause(2000);
        browser.page.elementsDataStudio()
            .waitForElementVisible('@GooglePassword', 10000)
            .click('@GooglePassword');
        browser.pause(2000);
        browser.page.elementsDataStudio()
            .setValue('@GooglePassword', upu.p)
            .click('@NextButton');
        browser
            .pause(1000)
            .url(upu.u1);
        browser.pause(5000);
        browser.page.elementsDataStudio()
            .waitForElementVisible('@FuseDashboardTitle', 10000);

        for (x = 0; x < 1440; x++) {

        browser.pause(60000);
        browser.page.elementsDataStudio()
            .assert.elementPresent('@RefreshButton', 5000)
            .click('@RefreshButton');
        }


    },
};
