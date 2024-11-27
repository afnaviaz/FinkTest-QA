import { Task } from "@testla/screenplay";
import { Click, Fill, Wait } from "@testla/screenplay-playwright/web";
import { GuaranteesModule } from "../features/Guarantee";

export class FillProviderDetails extends Task {


    public async performAs(actor: any): Promise<void> {
        await actor.attemptsTo(

            //Click en el campo de agente de carga para desplegar las opciones
            Wait.forLoadState("load"),
            Click.on(GuaranteesModule.Freight_Forwarder),


            Wait.forLoadState("load"),
            // Click en "Siguiente"
            Click.on(GuaranteesModule.next)
        );
    }

    public static perform(): FillProviderDetails {
        return new FillProviderDetails();
    }
}
