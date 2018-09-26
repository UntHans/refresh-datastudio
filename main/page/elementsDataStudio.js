var page = module.exports = {

    elements: {

// ==== Google Authentication ====

    GEInput : {
        selector : '//input[@name="identifier"]',
        locateStrategy : 'xpath',
    },
    NextButton : {
        selector : "//span[contains(text(), 'Next')]",
        locateStrategy : 'xpath',
    },
    GPInput : {
        selector : '//input[@name="password"]',
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
