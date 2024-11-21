import { th } from "@faker-js/faker";

export class SwagLabsHome{
    
    private NameHomeFinkargo:string;


    constructor(NameHomeFinkargo){
        this.NameHomeFinkargo = NameHomeFinkargo;
    }

    static TITLE_PAGE = '//*[@id="app"]/div[4]/header/div/div/a/img';

    get NAMEHOME() : string {
        return `//div[@class = "inventory_item_name " and text()="${this.NameHomeFinkargo}"]`;
    }
}