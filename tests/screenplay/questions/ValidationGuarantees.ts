import { Question } from "@testla/screenplay-playwright";
import { expect, Page } from "@playwright/test";
import { IActor } from "@testla/screenplay/lib/interfaces";

export class Validation extends Question<boolean> {
    
    private page : Page;

    constructor(page: Page){
        super();
        this.page = page;

    }

    private async isURLValid(): Promise<boolean> {
        try {
            await expect(this.page).toHaveURL("https://app-staging.finkargo.com.co/analyst/guarantees");
            return true; //URL valida
        } catch {
            return false; // url no valida
        }
    }

    public async answeredBy(): Promise<boolean> {
        return await this.isURLValid();
        
    }
}