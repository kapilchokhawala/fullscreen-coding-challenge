import googlePage from '../pages/google-page.js';
const googlePageUsage = new googlePage();

const assert = require('assert');
const randomString = require('randomstring');

describe('challenge scenarios', function() {

    before(async function() {
        await browser.url('/');
    });

    afterEach(async function() {
        await browser.url('/');
    });

    it('invalid login', async function() {
        await browser.click(googlePageUsage.btnSignIn);
        await browser.setValue(googlePageUsage.txbUserName, 'kapil.chokhawala' + randomString.generate(6));
        await browser.click(googlePageUsage.btnNext);
        await browser.waitForExist(googlePageUsage.txbUserName + googlePageUsage.domInvalidField);
        let isErrorMessage = await browser.isExisting(googlePageUsage.txbUserName + googlePageUsage.domInvalidField);
        assert(isErrorMessage, true);
    });

    it('search "fullscreen direct"', async function() {
        await browser.setValue(googlePageUsage.txbSearch, 'fullscreen direct');
        await browser.click(googlePageUsage.btnGoogleSearch);
        let searchResults = await browser.getAttribute(googlePageUsage.listSearchResults, 'href')
        let searchResultCount = searchResults.length;
        let firstSearchResultUrl = searchResults[0];
        let firstSearchResult = await browser.click(googlePageUsage.listSearchResults);
        let redirectedUrl = await browser.getUrl();
        assert.equal(searchResultCount > 5, true);
        assert.equal(firstSearchResultUrl, 'https://www.fullscreendirect.com/');
        assert.equal(redirectedUrl, 'https://www.fullscreendirect.com/');
    });
});