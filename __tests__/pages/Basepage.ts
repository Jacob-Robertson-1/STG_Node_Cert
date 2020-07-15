import { WebDriver, By, until } from "selenium-webdriver"

export default class BasePage {
    driver: WebDriver
    url: string
    constructor(driver: WebDriver) {
        this.driver = driver

    }
    async click(elementBy: By){
        await (await this.getElement(elementBy)).click()
    }

    async getAttribute(elementBy: By, attribute:string){
        await this.waitUntilVisible(elementBy)
        return this.driver.findElement(elementBy).getAttribute(attribute)
    }

    async getDriver(){
        return this.driver
    }
    async getElement(elementBy: By) {
        await this.waitUntilVisible(elementBy)
        return await this.driver.findElement(elementBy)
    }
    async getElements(elementBy: By) {
        await this.waitUntilVisible(elementBy)
        return await this.driver.findElements(elementBy)
    }
    async getText(elementBy: By) {
        return await (await this.getElement(elementBy)).getText()
    }
    async getTitle(){
        return await this.driver.getTitle()
    }
    async getURL(){
        return await this.driver.getCurrentUrl()
    }
    async navigate(){
        if(this.url == undefined || this.url == null)
            console.log('URL is undefined, unable to navigate.')
        else
            this.driver.get(this.url)
    }
    async quit(){
        await this.driver.quit()
    }
    async sendKeys(elementBy: By, keys: string) {
        await (await this.getElement(elementBy)).sendKeys(keys)
    }

    async waitUntilVisible(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
    }
}