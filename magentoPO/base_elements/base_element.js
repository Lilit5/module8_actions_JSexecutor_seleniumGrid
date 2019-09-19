const EC = protractor.ExpectedConditions;

class Element {
    constructor(selectorType, selector) {
        switch(selectorType){
            case "css":
                this.elem = element(by.css(selector));
                break;
            case "xpath":
                this.elem = element(by.xpath(selector));
                break;
            default:
                this.elem = element(by.xpath(selector));
        }    
    }
    // Changed implementation of click method. Now using Actions class
    async click() {
        await browser.wait(EC.visibilityOf(this.elem), 3000);
        return await browser.actions().click(this.elem).perform();
    };
    async sendKeys(keysToSend) {
        return await this.elem.sendKeys(keysToSend);
    }

    async highlightWithJS() {
        const bg = await this.elem.getCssValue("backgroundColor");
        await browser.executeScript("arguments[0].style.backgroundColor = '" + "yellow" + "'", this.elem);
        await browser.sleep(2000); //wait to see if highlight works
        await browser.executeScript("arguments[0].style.backgroundColor = '" + bg + "'", this.elem);
        return browser.sleep(1000);
    }
};

module.exports = Element;