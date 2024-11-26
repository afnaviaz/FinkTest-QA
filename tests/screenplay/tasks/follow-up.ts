import { Task } from "@testla/screenplay";
import { Click } from "@testla/screenplay-playwright/web";
import { ScrollDown } from "../abilities/ScrollDown";
import { GuaranteesModule } from "../features/Guarantee";


export class SelectDates extends Task {
    public async performAs(actor: any): Promise<void> {
        await actor.attemptsTo(
            // Click para abrir el selector de fecha
            Click.on('label="Elige la fecha, la fecha"'),

            // Seleccionar año
            Click.on('role=button[name="2024"][exact=true]'),

            // Seleccionar mes
            Click.on('role=button[name="nov"]'),

            // Seleccionar día inicial
            Click.on('role=gridcell[name="23"]'),

            // Seleccionar día final
            Click.on('role=gridcell[name="21"]'),

            // Click en "Siguiente"
            Click.on('role=button[name="Siguiente"]'),
            ScrollDown.onGuaranteesPage(),

            Click.on(GuaranteesModule.finish)
            
        );
    }

    public static perform(): SelectDates {
        return new SelectDates();
    }
}