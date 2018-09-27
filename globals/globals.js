var chromedriver = require('chromedriver');
var username = "test-value";
var password = "test-pass";
var url = "test";

module.exports = {

    username,
    password,
    url,

  before : function(done) {
    chromedriver.start();

    done();
  },

  after : function(done) {
    chromedriver.stop();

    done();
  }
};
