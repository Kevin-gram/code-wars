class Products{
    constructor(name,price){
        this.name=name
        this.price=price
    }
    getDetails(){
        return ` the product ${this.name} 's price is ${this.price}`
    }
    applyDiscount(discount){
        return this.price - (this.price * (discount/100));
    }
    
}
const z=new Products
z.name='sushi'
z.price=45
console.log(z.applyDiscount(15))