import {expect} from 'chai';
import CountriesHelper from '../helpers/countries.helper';
import CasesHelper from '../helpers/cases.helper';


describe('case per country', function () {
    const countriesHelper = new CountriesHelper();
    const casesHelper = new CasesHelper();
    let countryCode;

    before(async function () {
        await countriesHelper.get();
        countryCode = countriesHelper.response.body[Math.floor(Math.random() * countriesHelper.response.body.length)];
        await casesHelper.get(countryCode);
    });

    it('response status code is 200', async function () {
        expect(countriesHelper.response.statusCode).to.eq(200);
    });

    it('response body contains an array of at least one item', async function () {
        expect(countriesHelper.response.body.length).to.at.least(1);
    });

    it('response has randomly chosen country code', async function () {
        for(let caseData of casesHelper.response.body) {
            expect (caseData['Country_code']).to.eq(countryCode);
        };
    });
});