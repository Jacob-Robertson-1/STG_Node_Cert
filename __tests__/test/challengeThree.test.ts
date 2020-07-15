import getDriver from '../util/driverbuilder'
import HomePage from '../pages/HomePage'

describe('copart exotic', ()=>{
    var homePage:HomePage

    beforeAll(async() => {
        homePage = new HomePage(getDriver('chrome'))
    })

    beforeEach(async()=> {
        await homePage.navigate();
        await homePage.waitUntilAppLoaded();
    })

    it('Console Logging list of popular Vehicles', async()=> {
        await homePage.logPopularItems();

    })

    afterAll(async()=>{
        await homePage.quit()
    })
    
})