class WaitHelper {
    constructor(page) {
        this.page = page;

    }
    async waitForPageLoadToComplete() {
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = WaitHelper;