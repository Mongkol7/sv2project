// Cart Service
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Constructor
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('carts') ?? '[]');
  }

  private cart: any = [];

  // Public methods - CRUD operations in logical order
  addItem(item: any) {
    let current_cart: any = JSON.parse(localStorage.getItem('carts') ?? '[]');
    let dpl_index: number = current_cart.findIndex((obj: any) => obj.id === item.id);

    if (dpl_index > -1) {
      current_cart[dpl_index].qty += 1;
      console.log(current_cart);
      localStorage.setItem('carts', JSON.stringify(current_cart));
    } else {
      item.qty = 1;
      current_cart.push(item);
      localStorage.setItem('carts', JSON.stringify(current_cart));
    }
    // Add this line to sync the cart
    this.cart = current_cart;
  }

  getItem(): any {
    return JSON.parse(localStorage.getItem('carts') ?? '[]');
  }

  getTotal(): any {
    let total: number = 0;
    const currentCart = this.getItem(); // Use getItem() to get fresh data
    currentCart.forEach((item: { price: number; qty: number; }) => {
      total += item.price * item.qty;
    });
    return total;
  }

  removeItem(item: any) {
    let current_cart = JSON.parse(localStorage.getItem('carts') ?? '[]');
    const index = current_cart.findIndex((cartItem: any) => cartItem.id === item.id);
    if (index > -1) {
      current_cart.splice(index, 1);
      localStorage.setItem('carts', JSON.stringify(current_cart));
      this.cart = current_cart; // Sync the cart
    }
  }

  incrementQty(item: any) {
    let current_cart = JSON.parse(localStorage.getItem('carts') ?? '[]');
    let index = current_cart.findIndex((cartItem: any) => cartItem.id === item.id);
    if (index > -1) {
      current_cart[index].qty++;
      localStorage.setItem('carts', JSON.stringify(current_cart));
      this.cart = current_cart; // Sync the cart
    }
  }

  decrementQty(item: any) {
    let current_cart = JSON.parse(localStorage.getItem('carts') ?? '[]');
    let index = current_cart.findIndex((cartItem: any) => cartItem.id === item.id);
    if (index > -1) {
      current_cart[index].qty--;
      localStorage.setItem('carts', JSON.stringify(current_cart));
      this.cart = current_cart; // Sync the cart
    }
  }
}
