export class Cart {
    constructor(id, productCart){
        this.id = id;
        this.productCart = productCart
    }

    addCart(productId, quantity){
        this.productCart.push({productId: productId, quantity: quantity})
    }
}