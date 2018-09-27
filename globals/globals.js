var chromedriver = require('chromedriver');
var username = "test";
var password = "test2";
var url = "https://datastudio.google.com/navigation/reporting";

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
