const { expect } = require('chai');
const axios = require('axios');
const FormData = require('form-data');

describe("Verify User Login", () => {

    it("User login with valid credentials should return 'User exists!'", async () => {
        const formData = new FormData();
        formData.append('email', 'test1test1test1@yopmail.com');
        formData.append('password', 'test1test1test1');

        const response = await axios.post('https://automationexercise.com/api/verifyLogin', formData, {
            headers: formData.getHeaders()
        });

        expect(response.data.message).to.equal("User exists!");
        expect(response.data.responseCode).to.equal(200);
        console.log("Verified: User login successful with message 'User exists!'");
    });

});
