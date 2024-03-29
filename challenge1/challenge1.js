require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;

describe("challenge1 suite", function() {
    this.timeout(20000);
    var driver;

    before(function() {
        //initializing chrome driver
        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
    });
    after(function() {
        return driver.quit();
    });
it("I open to the google website", function() {
    return driver.get("http://www.google.com");
});

it("The title is 'google'", function() {
    return driver.getTitle().then(function(title) {
          assert.equal(title, "Google");
        });
        
    });
});

