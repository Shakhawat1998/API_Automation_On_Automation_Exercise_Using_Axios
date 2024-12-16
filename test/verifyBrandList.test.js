const { expect } = require('chai');
const axios = require('axios');

describe("Validate Brand List", () => {

    it("Response contains specific brands: Polo, Babyhug, and Biba", async () => {
        const response = await axios.get('https://automationexercise.com/api/brandsList', {
            headers: { "Content-Type": "application/json" }
        });
        const brands = response.data.brands.map(brandObj => brandObj.brand);
        expect(brands).to.include("Polo");
        expect(brands).to.include("Babyhug");
        expect(brands).to.include("Biba");
        console.log("Verified: Brands Polo, Babyhug, and Biba are present.");
    });

    it("Response does not contain specific brands: Heineken, BMW, and Razor", async () => {
        const response = await axios.get('https://automationexercise.com/api/brandsList', {
            headers: { "Content-Type": "application/json" }
        });
        const brands = response.data.brands.map(brandObj => brandObj.brand);
        expect(brands).to.not.include("Heineken");
        expect(brands).to.not.include("BMW");
        expect(brands).to.not.include("Razor");
        console.log("Verified: Brands Heineken, BMW, and Razor are not present.");
    });

});
