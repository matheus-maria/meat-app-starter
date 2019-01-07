import { NgModule } from "@angular/core";
import { ShoppingCartService } from "./shopping-cart.service";
import { OrderService } from "./order.service";
import { RestaurantService } from "./restaurants.service";
import { NotificationService } from "./notification.service";

@NgModule({
    providers:[
        ShoppingCartService, 
        OrderService, 
        RestaurantService,
        NotificationService
    ]
})
export class CoreModule { }