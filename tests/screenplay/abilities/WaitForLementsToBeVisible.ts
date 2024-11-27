import { Task, Actor } from "@testla/screenplay";
import { BrowseTheWeb } from "@testla/screenplay-playwright/web";



export class WaitForElementToBeVisible extends Task{

    constructor(private selector: string){
        super();
    }


    public async performAs(actor: Actor): Promise<any> {
        const page= BrowseTheWeb.as(actor).getPage();
        await page.locator(this.selector).waitFor({ state: "visible"});
    }

    static on(selector: string): WaitForElementToBeVisible {
        return new WaitForElementToBeVisible(selector);
    }
}