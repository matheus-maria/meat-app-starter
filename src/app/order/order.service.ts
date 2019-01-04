import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order, OrderItem } from "./order.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { Http, RequestOptions, Headers } from "@angular/http";
import { MEAT_API } from "app/app.api";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService,private http: Http) {}

    cartItems = (): CartItem[] => {
        return this.cartService.items
    }

    increaseQtd = (item: CartItem): void => {
        this.cartService.increaseQtd(item)
    }

    decreaseQtd = (item: CartItem): void => {
        this.cartService.decreaseQtd(item)
    }

    remove = (item: CartItem): void => {
        this.cartService.removeItem(item)
    }

    deliveryValue = (): number => {
        if(this.cartItems().length === 0)
            return 0;
        else
            return 8;
    }

    checkOrder = (order: Order): Observable<string> => {
        const headers = new Headers()
        headers.append('Content-Type','application/json')
        
        return this.http.post(`${MEAT_API}/orders`,JSON.stringify(order), new RequestOptions({ headers }))
            .map( response => response.json())
            .map( order => order.id )
    }

    clear = () => {
        this.cartService.clear()
    }

}