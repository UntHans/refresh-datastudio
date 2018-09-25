var page = module.exports = {

    elements: {

// ==== Google Authentication ====

    GoogleEmailInput : {
        selector : '//input[@name="identifier"]',
        locateStrategy : 'xpath',
    },
    NextButton : {
        selector : "//span[contains(text(), 'Next')]",
        locateStrategy : 'xpath',
    },
    GooglePassword : {
        selector : '//input[@name="password"]',
        locateStrategy : 'xpath',
    },
    ForgotPasswordLink : {
        selector : '//span[contains(text(), "Forgot password?")]',
        locateStrategy : 'xpath',
    },
    IDontHaveMyPhoneLink : {
        selector : '//div[@role="link"][2]',
        // selector : '//div[@id="view_container"][2]//form//div[2]//div[1]//div[3]//div[2]//div[2]//div[1]',
        // selector : "//div[contains(text(), 'I don't have my phone')]",
        locateStrategy : 'xpath',
    },
    AccountRecoveryDropdownMonth : {
        selector : '//select[@aria-labelledby="month-label"]',
        locateStrategy : 'xpath',
    },
    AccountRecoveryMonthSelect: {
        selector : '//option[contains(text(), "September")]',
        locateStrategy : 'xpath',
    },
    AccountRecoveryDropdownYear : {
        selector : '//select[@aria-labelledby="year-label"]',
        locateStrategy : 'xpath',
    },
    AccountRecoveryYearSelect: {
        selector : '//option[contains(text(), "2018")]',
        locateStrategy : 'xpath',
    },
    Spinner : {
        selector : '//div[@class="loading-indecator"]',
        locateStrategy : 'xpath',
    },

// ==== Fuse Dashboard ====

    DataStudioTitle: {
        selector : '//span[@class="suite-lockup-brand ng-binding"]',
        locateStrategy : 'xpath',
    },
    FuseDashboardLink : {
        selector : '//span[@aria-label="Fuse Dashboard"]',
        locateStrategy : 'xpath',
    },
    FuseDashboardTitle : {
        selector : '//div[@id="lego-title-input"]',
        locateStrategy : 'xpath',
    },
    RefreshButton : {
        selector: '//div[@class="header-button-icon refreshIcon"]',
        locateStrategy: 'xpath',
    }

    }
};
