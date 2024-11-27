import { Actor, Task } from "@testla/screenplay";
import { BrowseTheWeb, Click, Fill, Hover, Wait } from "@testla/screenplay-playwright/web";
import { GuaranteesModule } from "../features/Guarantee";
import { Sleep } from "@testla/screenplay-playwright";
import { ScrollDown } from "../abilities/ScrollDown";
import { WaitForElementToBeVisible } from "../abilities/WaitForLementsToBeVisible";

export class Addguarantees extends Task {

    private tipoGuarantiess:string;
    private Operation:string


    public async performAs(actor: Actor): Promise<void>{ 
        return actor.attemptsTo(

          //Hover sobre el botón para agregar garantía
            Wait.forLoadState("load"),//espera explicita hasta que se cargue la pagina
            Click.on(GuaranteesModule.add_warranty),
            Wait.forLoadState("load"),

            Click.on(GuaranteesModule.tipeGuarantiess),
            //Seleccionar el tipo de garantia
            Click.on(GuaranteesModule.SelectTipeGaurantess),

            Click.on(GuaranteesModule.Selectlinkedguarantee),
            
            Wait.forLoadState("load"),
            Click.on(GuaranteesModule.SelectOperation),
            Sleep.for(15),


        
            WaitForElementToBeVisible.on(GuaranteesModule.next),
            Wait.forSelector(GuaranteesModule.next),
            Click.on(GuaranteesModule.next),
            

        );
    }
}
