import NavigationPage from './NavigationPage'
import { WebDriver, By} from 'selenium-webdriver'

export default class ExoticsPage extends NavigationPage {
    table:By
    tableMake:By
    constructor(driver:WebDriver){
        super(driver)
        this.table = By.xpath('//table[@id="serverSideDataTable"]')
        this.tableMake = By.xpath('//table[@id="serverSideDataTable"]//tbody//tr/td[5]')
    }

    async waitUntilTableLoaded(){
        await this.waitUntilVisible(this.table)
    }

    async searchMakeInTable(make:string) {
        let inTable:boolean
        let elements = await this.getElements(this.tableMake)
        for (let i = 0; i < elements.length; i++) {
            let t = elements[i].getText();
                if (await t == make) {
                console.log(`${make} is in Table`)
                return true;
            }
        }
        if(inTable == !true) {
            throw new Error(`${make} was not found in the list of makes`);
         }
    }
}