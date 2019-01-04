import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService) {}

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

}