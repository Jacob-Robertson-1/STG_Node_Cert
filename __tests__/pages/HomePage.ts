import NavigationPage from './NavigationPage'
import { WebDriver, By} from 'selenium-webdriver'

export default class HomePage extends NavigationPage {
    popularItems:By
    constructor(driver:WebDriver){
        super(driver)
        this.popularItems = By.xpath('//div[@ng-if="popularSearches"]//div[2]//div//ul//li//a')
    }

    async logPopularItems() {
        let elements = await this.getElements(this.popularItems)
        for (let i = 0; i < elements.length; i++) {
            let ref = await elements[i].getAttribute("href");
            let vehicle =  await elements[i].getText();
                console.log(`${vehicle} - ${ref}`)
                
        }
    }
}