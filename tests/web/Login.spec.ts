import test from "@playwright/test";
import { Actor } from "@testla/screenplay";
import { BrowseTheWeb, Element } from "@testla/screenplay-playwright/web";
import { Login } from "../screenplay/tasks/login";
import { SwagLabsHome } from "../screenplay/features/SwagLabsHome";
import { Addguarantees} from "../screenplay/tasks/Addguarantees";
import { NavigateToGuarrantees} from "../screenplay/tasks/NavigateToGuarrantees";


let url:string = "https://app-staging.finkargo.com.co/auth/login";
let username:string = "finkargo-admin";
let password:string = "finkargo";


test('Login to AppFinkargo', async({page}) => {

    const user = Actor.named("usuario").can(BrowseTheWeb.using(page));

    await user.attemptsTo(Login.toApp(url,username,password));
    await user.asks(Element.toBe.visible(SwagLabsHome.TITLE_PAGE));
    
});