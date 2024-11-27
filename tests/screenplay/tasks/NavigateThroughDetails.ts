import { Task } from "@testla/screenplay";
import { Click, Wait } from "@testla/screenplay-playwright/web";
import { WaitForElementToBeVisible } from "../abilities/WaitForLementsToBeVisible";
import { GuaranteesModule } from "../features/Guarantee";


export class NavigateThroughDetails extends Task {
    public async performAs(actor: any): Promise<void> {
        await actor.attemptsTo(
            // Click en "Detalles de la mercancía"
            //Click.on('role=heading[name="Detalles de la mercancía"]'),

            Wait.forLoadState("load"),
            Click.on(GuaranteesModule.next),
            //Click.on(GuaranteesModule.supplier_data)
        );
    }

    public static perform(): NavigateThroughDetails {
        return new NavigateThroughDetails();
    }
}