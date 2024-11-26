import { Actor, Task } from "@testla/screenplay";
import { Click, Fill, Hover, Wait } from "@testla/screenplay-playwright/web";
import { GuaranteesModule } from "../features/Guarantee";

export class Addguarantees extends Task {

    private tipoGuarantiess:string;
    private Operation:string

    public async performAs(actor: Actor): Promise<any>{ 
        return actor.attemptsTo(
            // Hover sobre el botón para agregar garantía
            Wait.forLoadState("load"), //espera explicita hasta que se cargue la pagina
            Click.on(GuaranteesModule.add_warranty),
            Wait.forLoadState("load"),
            //Seleccionar el tipo de garantia
            Click.on(GuaranteesModule.tipeGuarantiess),

            Wait.forLoadState("load"),
            Click.on(GuaranteesModule.Selectlinkedguarantee),
            Click.on(GuaranteesModule.Selectoperation),
        
            Wait.forEvent("load"),
            Click.on(GuaranteesModule.next)     
        );
    }

}
