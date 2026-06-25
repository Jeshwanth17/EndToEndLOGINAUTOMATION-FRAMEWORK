const { expect } = require("@playwright/test");
class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameCss = "#userEmail";
        this.passwordCss = "#userPassword";
        this.loginButtonCss = "#login";
    }

    async navigateToApplication() {
        await this.page.goto(
            process.env.DEV_URL
        );
    }

    async logintoApplication(username, password) {
        await this.page.fill(this.usernameCss, username);
        await this.page.fill(this.passwordCss, password);
        await this.page.click(this.loginButtonCss);
    }
    /* Assertion verify the sucesslogin method */
    async verifySuccessLoginUsingURL() {

        await expect(this.page).toHaveURL(/dashboard/);
        console.log("verified")
    }
}

module.exports = LoginPage;