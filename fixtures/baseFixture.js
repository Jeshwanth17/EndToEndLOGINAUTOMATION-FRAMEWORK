
const base = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const WaitHelper = require("../utils/WaitHelper");

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    waitHelper: async ({ page }, use) => {
        const waitHelper = new WaitHelper(page);
        await use(waitHelper);
    }
});

exports.expect = base.expect;
// i will make this use as fixture i can use that in testcase level i didnt need to write again and again




/* What exactly im doing over here 
1.base = require(playwright) your importing complete playwright testframework 
2 this gives you test testcase wrighting and expect validation everything one base
3 we storing playwright defualt befavior we storing custom future
like this const { test, expect } = require('@playwright/test');
this like importing toolbox already as everything
So we can add othertools into it we can access each and everyfuction including recently added once
exports.test = base.test.extend ==>
    this line used to create a custom version of test exports.test =t base.test means this is original test fuction that comming from playwright we are importing the complete version of playwrigt
using extend method adding extra futures exports means we are making it public it can use all
 */