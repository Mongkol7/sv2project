import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import { DollarToKhmerPipe } from '../dollar-to-khmer-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-out',
  imports: [NgFor, NgIf, CurrencyPipe, DollarToKhmerPipe, FormsModule],
  templateUrl: './check-out.html',
  styleUrl: './check-out.css'
})
export class CheckOut {

  // Customer Information
  customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  // Shipping Address
  shipping = {
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'cambodia'
  };

  // Payment Information
  payment = {
    method: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  };

  constructor(public cartService: CartService) {}

  // Get cart items from service
  getCartItems() {
    return this.cartService.getItem();
  }

  // Get cart total count
  getCartCount() {
    return this.getCartItems().length;
  }

  // Get subtotal from cart service
  getSubtotal() {
    return this.cartService.getTotal();
  }

  // Select payment method
  selectPayment(method: string) {
    this.payment.method = method;
  }
}
