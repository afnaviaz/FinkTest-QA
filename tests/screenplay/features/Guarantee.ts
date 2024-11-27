export class GuaranteesModule{
    

    static GUARANTEES_INPUT:string = '//*[@id="app"]/div[4]/nav/div/div/div/ul/li[7]/a/div/div[2]/span';
    static add_warranty:string = '//*[@id="container-body"]/div/div[3]/div/div[4]/button';
    static OptionGuaranties:string = '//*[@id="app"]/div[5]/form/div/div[4]/div/div';
    
    static tipeGuarantiess:string = '//*[@id="select-for-type"]';

    static SelectTipeGaurantess:string = '//div[@id="menu-type"]//li[contains(text(),"Producción")]';
    
    //Selector de campo donde esta cargada las operaciones.
    static Selectlinkedguarantee = '//*[@id="select-for-operation"]';

    //selector de la operacion vinculada a la garantia
    static SelectOperation = '//*[@id="menu-operation_selected"]/div[3]/ul/li[contains(text(), "CO:900674991:1:3")]';
    
    //Selector de los botones de siguiente
    static next = '//button[normalize-space()="Siguiente"]';

    //Localizador datos del proveedro, pestaña datos alieados.
    static supplier_data:string = ' //h2[normalize-space()="Datos del proveedor"]';
    
    //Localizador agente de carga
    static Freight_Forwarder:string = '/html/body/div[1]/div[5]/div[2]/div/div[2]/div/div/div/div/input';

    static search_client = '//*[@id="search-input-search_input"]';
    static details = '//*[@id="view-deatils-1126-button"]';
    static DetailClient = '//*[@id="view-deatils-1126-menu"]/div[3]/ul/div/li/div[2]/span';
    static finish = '//*[@id="app"]/div[5]/div[6]/button[2]';


}