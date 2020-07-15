import getDriver from '../util/driverbuilder'
import ResultsPage from '../pages/ResultsPage'

describe('copart exotic', ()=>{
    var resultsPage:ResultsPage

    beforeAll(async() => {
        resultsPage = new ResultsPage(getDriver('chrome'))
    })

    beforeEach(async()=> {
        await resultsPage.navigate()
        await resultsPage.waitUntilAppLoaded();
    })

    it('Searching for Exotics', async()=> {
        
        await (await resultsPage.search("exotics"))
        await resultsPage.waitUntilTableLoaded()
        const searchMake = await resultsPage.searchMakeInTable("PORSCHE");
        expect(searchMake).toEqual(true);
    })

    afterAll(async()=>{
        await resultsPage.quit()
    })
    
})