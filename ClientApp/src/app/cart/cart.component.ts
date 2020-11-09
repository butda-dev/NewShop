import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  boolItems: boolean = false;
  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
    if (this.items.length > 0) {
      this.boolItems = true;
    }
   }

   clearItems() {
     this.items = this.cartService.clearCart();
     this.boolItems = false;
   }
  ngOnInit() {
  }

}
