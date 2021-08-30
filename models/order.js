export class Order{
    constructor(id, productOrder, date){
        this.id = id;
        this.productOrder = productOrder;
        this.date = date;
    }

    addProductOrder(productId, quantity){
        this.productCart.push({productId: productId, quantity: quantity})
    }
}