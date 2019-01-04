class Order {
    public constructor(
        public adress: string,
        public number: number,
        public optional: string,
        public paymentOption: string,
        public orderItens: OrderItem[] = []
    ) {}
}

class OrderItem {
    constructor (public quantity: number, public menuId: string) {}
}

export {Order, OrderItem}

