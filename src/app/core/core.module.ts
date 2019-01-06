import { NgModule } from "@angular/core";
import { ShoppingCartService } from "./shopping-cart.service";
import { OrderService } from "./order.service";
import { RestaurantService } from "./restaurants.service";

@NgModule({
    providers:[
        ShoppingCartService, 
        OrderService, 
        RestaurantService
    ]
})
export class CoreModule { }