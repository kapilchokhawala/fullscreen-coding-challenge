export default class googlePage {

    get btnIAmFeelingLucky() { return '[value="I\'m Feeling Lucky"]'; }
    get btnSignIn() { return 'a=Sign in'; }
    get btnNext() { return '#identifierNext'; }
    get btnGoogleSearch() { return '[value="Google Search"]'; }

    get domInvalidField() { return '[aria-invalid="true"]'; }

    get lblInvalidIdentifierError()  { return '//div[contains(text(), "Couldn\'t find your Google Account")]'; }

    get linkGoogleHomeLogo() { return '#lga #hplogo'; }

    get listSearchResults() { return '.g .rc .r a'; }

    get txbSearch() { return '[title="Search"]'; }
    get txbUserName() { return '[name="identifier"]'; }
    get txbPassword() { return '[name="password"]'; }

}