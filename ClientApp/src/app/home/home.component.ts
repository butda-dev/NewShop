import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './data';
import { CartService } from './../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:[ './home.component.css']
})
export class HomeComponent {
  products: Product;
  
  url: string = `../../assets/data.json`;
  cartUrl: string = `../../assets/cart.json`;
  constructor(private cartService: CartService, private http: HttpClient){}
      
  ngOnInit() {
    this.http.get(this.url).toPromise().then((data: Product) => this.products = data);
  }

  addToCart(product) {
    window.alert('Товар успешно добавлен!');
    this.cartService.addToCart(product);
  }
}
