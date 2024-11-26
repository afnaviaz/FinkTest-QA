import { Task } from "@testla/screenplay";
import { Click, Fill, Press, Type } from "@testla/screenplay-playwright/web";
import { GuaranteesModule } from "../features/Guarantee";
import { BrowseTheWeb, Element } from "@testla/screenplay-playwright/web";
import {ScrollDown} from "../abilities/ScrollDown";

export class SearchClientInGuarantees extends Task{
    private clientSearch:string;


    constructor(clientSearch: string){
        super();
        this.clientSearch = clientSearch;
    }

    public static using(clientSearch:string): SearchClientInGuarantees {
        return new SearchClientInGuarantees(clientSearch);

    }

    public async performAs(actor: any): Promise<void> {
        await actor.attemptsTo(
            Click.on(GuaranteesModule.search_client),

            ...this.clientSearch.split("").map(char => Press.key(char)),
            ScrollDown.onGuaranteesPage()
        );

    
    }

}
