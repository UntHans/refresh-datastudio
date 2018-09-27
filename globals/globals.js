var chromedriver = require('chromedriver');
var username = "qahannes2@gmail.com";
var password = "Test@12345";
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
