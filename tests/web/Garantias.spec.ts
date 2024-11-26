import { Actor } from "@testla/screenplay";
import { BrowseTheWeb, Element } from "@testla/screenplay-playwright/web";
import { Login } from "../screenplay/tasks/login";
import { Addguarantees} from "../screenplay/tasks/Addguarantees";
import { NavigateToGuarrantees} from "../screenplay/tasks/NavigateToGuarrantees";
import test from "@playwright/test";
import { SearchClientInGuarantees } from "../screenplay/tasks/search_for_client";
import { ViewClientDetails } from "../screenplay/tasks/Customer_detail";
import { FillProviderDetails } from "../screenplay/tasks/FillProviderDetails";
import { NavigateThroughDetails } from "../screenplay/tasks/NavigateThroughDetails";


let url:string = "https://app-staging.finkargo.com.co/auth/login";
let username:string = "finkargo-admin";
let password:string = "finkargo";



test('El usuario puede agregar un garantia', async({page}) =>  {
    
    const user = Actor.named("usuario").can(BrowseTheWeb.using(page));
    await user.attemptsTo(Login.toApp(url, username, password),
    NavigateToGuarrantees.to(),
    SearchClientInGuarantees.using("20F5a"),
    ViewClientDetails.perform(),
    new Addguarantees(),
    new NavigateThroughDetails(),
    new FillProviderDetails(),
    
    );
});


