export class Product {
    constructor() {
    }
    products: {
        id: number;
        name: string;
        price: number;
        attr: {
            color: string;
            format: string;  
        }
    }
}