const chromedriver = require('chromedriver')
const edgedriver = require('edgedriver')
const firefoxdriver = require('geckodriver')

import { Builder, Capabilities } from 'selenium-webdriver'

export default function getDriver(browser: string) {
    switch (browser.toLowerCase()) {
        case ("chrome"):
                return new Builder()
                .withCapabilities(Capabilities.chrome())
                .build()
                break;
        case ("edge"):
            return new Builder()
                .withCapabilities(Capabilities.edge())
                .build()
                break;
        case ("firefox"):
                return new Builder()
                .withCapabilities(Capabilities.firefox())
                .build()
                break;
        default:
            console.log(`the Browser '${browser}' is not supported by this function or wasn't defined. Defaulting to Chrome`)
            return new Builder()
                .withCapabilities(Capabilities.chrome())
                .build()
    }

}