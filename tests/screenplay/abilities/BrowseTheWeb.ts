import { Page } from "@playwright/test";
import { Ability } from "@testla/screenplay";

export class BrowserAbility extends Ability {
    
    private page;

    private constructor(page: Page) {
        super();
        this.page;
    }

    public async scroll(url: string): Promise<void>{
        return this.page.frameLocator;
    }
}













  