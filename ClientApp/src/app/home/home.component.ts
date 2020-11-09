import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from './data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:[ './home.component.css']
})
export class HomeComponent {
  products: Product;
  url: string = `../../assets/data.json`;
  cartUrl: string = `../../assets/cart.json`;
  constructor(private http: HttpClient){}
      
  ngOnInit() {
    this.http.get(this.url).toPromise().then((data: Product) => this.products = data);
  }
  items = [];

  addToCart(product: string) {
    this.items.push(product);
    console.log(this.items);
  }

  // getItems() {
  //   return this.items.length;
  // }

  // clearCart() {
  //   this.items = [];
  //   this.count = 0;
  //   return this.items;
  // }
}
