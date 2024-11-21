import { Actor, Task } from "@testla/screenplay-playwright";
import { Click, Fill, Navigate, Wait } from "@testla/screenplay-playwright/web";
import {AppLogin} from "../features/inicios_sesion";


export class Login extends Task {

    private urlPage:string;
    private username:string;
    private password:string;


    constructor(url, username, passwrod){
        super();
        this.urlPage = url;
        this.username = username;
        this.password = passwrod;
    }

    public async performAs(actor: Actor): Promise<any> {
        return actor.attemptsTo(
            Navigate.to(this.urlPage),
            Fill.in(AppLogin.USERNAME_INPUT, this.username),
            Fill.in(AppLogin.PASSWORD_INPUT, this.password),
            Click.on(AppLogin.CLICK_INGRESAR),
            Wait.forLoadState("load")
        );
    }

    public static toApp(url, username, password): Login{
        return new Login(url, username, password);

    }
}