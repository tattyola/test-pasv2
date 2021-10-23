import supertest from 'supertest';

class CasesHelper{
    constructor() {
        this.response = null;
    }

    async get(countryCode) {
        await supertest(process.env.BASE_URL)
            .get(`/country/${countryCode}`)
            .then((res) => {
                this.response = res;
            });
        return this.response;
    }
}

export default CasesHelper;