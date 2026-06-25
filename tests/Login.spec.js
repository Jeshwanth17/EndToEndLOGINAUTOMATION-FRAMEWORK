const { test, expect } = require("../fixtures/baseFixture");
const data = require("../data/testData.json")
test("My login TestCase", async ({ loginPage, waitHelper }) => {

    await loginPage.navigateToApplication();

    await loginPage.logintoApplication(

        data.username, data.password
    );
    await waitHelper.waitForPageLoadToComplete();
    // page.waitForLoadState('networkidle');
    //Assertion
    await loginPage.verifySuccessLoginUsingURL();

});
// await page.fill("#userEmail", "jashwanthkurapati2002@gmail.com");
//     await page.fill("#userPassword", "Jashwanth@1708");
//     // // await page.locator(CSS).fill(username);
//     // //click on login button
//     await page.click("#login");
//     // without Writing above 3 lines of code we create a page fuction that and we will call the fuctions as needs