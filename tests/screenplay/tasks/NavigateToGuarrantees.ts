import { Actor, Task } from "@testla/screenplay"
import { Click, Navigate, Wait } from "@testla/screenplay-playwright/web";
import { GuaranteesModule } from "../features/Guarantee";



export class NavigateToGuarrantees extends Task{

    public async performAs(actor: Actor): Promise<any> {
        await actor.attemptsTo(
             // Navegar a la URL base de la aplicación
             //Navigate.to('https://app-staging.finkargo.com.co/analyst/home'),
             Wait.forLoadState('load'),
             
             // Hacer clic en el input o botón para acceder al módulo de garantías
             Click.on(GuaranteesModule.GUARANTEES_INPUT)

        );
        
    }

    public static to(): NavigateToGuarrantees {
        return new NavigateToGuarrantees();
    }
};




