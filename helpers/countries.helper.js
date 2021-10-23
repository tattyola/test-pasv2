import supertest from 'supertest';
import { expect } from 'chai';

class CountriesHelper{
    constructor() {
        this.response = null;
    }

    async get() {
        await supertest(process.env.BASE_URL)
            .get('/country_codes')
            .then((res) => {
                this.response = res;
            });
        return this.response;
    }
}

export default CountriesHelper;