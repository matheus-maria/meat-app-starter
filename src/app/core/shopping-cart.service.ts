import { CartItem } from "../components/restaurant-detail/shopping-cart/cart-item.model";
import { MenuItem } from "../components/restaurant-detail/menu-item/menu-item.model";

export class ShoppingCartService {

    items: CartItem[] = []

    clear = (): void => {
        this.items = []
    }

    addItem = (item: MenuItem): void => {
        let foundItem = this.items.find( (mItem) => mItem.menuItem.id === item.id )

        if( foundItem ) {
            this.increaseQtd(foundItem)
        }
        else {
            this.items.push(new CartItem(item));
        }

    } 

    removeItem = (item: CartItem): void => {
        this.items.splice(this.items.indexOf(item), 1)
    } 

    increaseQtd = (item: CartItem): void => {
        item.quantity += 1         
    }

    decreaseQtd = (item: CartItem): void => {
        item.quantity -= 1
        if(item.quantity === 0){
            this.removeItem(item);
        }
    }

    total = (): number => this.items
        .map(item => item.value())
        .reduce((prev, value) => prev + value, 0)

}