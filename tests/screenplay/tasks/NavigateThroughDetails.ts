import { Task } from "@testla/screenplay";
import { Click } from "@testla/screenplay-playwright/web";


export class NavigateThroughDetails extends Task {
    public async performAs(actor: any): Promise<void> {
        await actor.attemptsTo(
            // Click en "Detalles de la mercancía"
            Click.on('role=heading[name="Detalles de la mercancía"]'),

            // Click en "Siguiente"
            Click.on('role=button[name="Siguiente"]'),

            // Click en "Datos del proveedor"
            Click.on('role=heading[name="Datos del proveedor"]')
        );
    }

    public static perform(): NavigateThroughDetails {
        return new NavigateThroughDetails();
    }
}