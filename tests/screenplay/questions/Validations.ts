import { Question } from "@testla/screenplay-playwright";
import { expect, Page } from "@playwright/test";

export class Validation extends Question<boolean>{
    private valor;
    private page;


    constructor(page: Page){
        super();
        this.page = page;
    }

    private async url(){
        this.valor = await expect(this.page).toHaveURL("https://app-staging.finkargo.com.co/auth/login");
    }

    public async answeredBy(): Promise<boolean> {
        
        this.url();

        return Promise.resolve(this.valor);
    }
}