import BasePage from './BasePage'
import { WebDriver, By} from 'selenium-webdriver';

export default class HomePage extends BasePage{
    searchBar: By
    searchButton: By

    constructor(driver:WebDriver){
        super(driver)
        this.url = "https://www.copart.com"
        this.searchBar = By.xpath('//input[@id="input-search"]')
        this.searchButton = By.xpath('//button[contains(text(), "Search")]')
        
    }    
    async waitUntilAppLoaded(){
        await this.waitUntilVisible(this.searchBar)
    }
    async search(text:string){
        await this.sendKeys(this.searchBar, `${text}\n`);
        await this.click(this.searchButton);
    }
}