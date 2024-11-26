import { Task } from "@testla/screenplay";
import { Click, Fill } from "@testla/screenplay-playwright/web";

export class FillProviderDetails extends Task {


    public async performAs(actor: any): Promise<void> {
        await actor.attemptsTo(
            // Click en el campo "Nombre del Agente de carga"
            Click.on('label="Nombre del Agente de carga *"'),

            // Llenar el campo
            //Fill.in('role=combobox[name="Nombre del Agente de carga *"]').with("ec41"),

            // Seleccionar la opción
            Click.on('role=option[name="87e84a81d3df7345b24aff21edf3ec41"]'),

            // Click en "Siguiente"
            Click.on('role=button[name="Siguiente"]')
        );
    }

    public static perform(): FillProviderDetails {
        return new FillProviderDetails();
    }
}
