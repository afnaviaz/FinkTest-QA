import { Task } from "@testla/screenplay";
import { Click } from "@testla/screenplay-playwright/web";
import { GuaranteesModule } from "../features/Guarantee";


export class ViewClientDetails extends Task{

   public async performAs(actor: any): Promise<void>{
    
    await actor.attemptsTo(
        Click.on(GuaranteesModule.details),
        Click.on(GuaranteesModule.DetailClient)
    );
   }

   public static perform(): ViewClientDetails {
    return new ViewClientDetails();
  }

}