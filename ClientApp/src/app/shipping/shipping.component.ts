import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
// import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
  checkoutForm;

  constructor(private cartService: CartService) {
    this.shippingCosts = this.cartService.getShippingPrices();
    // this.checkoutForm = this.formBuilder.group({
    //   name: '',
    //   address: ''
    // });
   }
  //  onSubmit(customerData) {
    
  //   console.warn('Ваш заказ принят', customerData);
 
  //   this.items = this.cartService.clearCart();
  //   this.checkoutForm.reset();
  // }

  ngOnInit() {
  }

}
