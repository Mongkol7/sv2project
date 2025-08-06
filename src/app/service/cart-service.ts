import { Injectable } from '@angular/core';
declare const $:any;

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() {
    this.executeWithLoading(() => {
      this.cart = JSON.parse(localStorage.getItem('carts') ?? '[]');
    });
  }
  //private for not allow to directly access the variable, has to use function;
  private cart:any = [];


  //Loading Section:
  private executeWithLoading(operation: () => void): void {
    $.LoadingOverlay("show");
    try {
      operation();
    } catch (error) {
      console.error('Cart operation error:', error);
    } finally {
      $.LoadingOverlay("hide");
    }
  }

  addItem (item:any) {
    item.qty = 1;
    let dpl_index: number = this.cart.findIndex((obj: any) => obj.name === item.name);
    if (dpl_index > -1) {
      this.cart[dpl_index].qty += 1;
    } else {
      this.cart.push(item);
    }
    localStorage.setItem('carts', JSON.stringify(this.cart));
  }
  getItem():any{
    return this.cart;
  }

  getTotal():any{
    let total:number = 0;
    this.cart.forEach((item: {price:number; qty:number; })=> {
      total += item.price * item.qty;
    });
    return total;
  }

  removeItem(item:any){
    this.cart.splice(this.cart.indexOf(item), 1);
    localStorage.setItem('carts', JSON.stringify(this.cart));
  }

  incrementQty(item:any){
    let index = this.cart.indexOf(item);
    if(index > -1){
      this.cart[index].qty ++;
      localStorage.setItem('carts', JSON.stringify((this.cart)));
    }
  }
  decrementQty(item:any){
    let index = this.cart.indexOf(item);
    if(index > -1){
      this.cart[index].qty --;
      localStorage.setItem('carts', JSON.stringify((this.cart)));
    }
  }

}
