import { Component } from '@angular/core';
import {ProductCard} from '../product-card/product-card';
import {NgStyle, NgIf, NgFor} from '@angular/common';
import {CartService} from '../service/cart-service';
import {ProductService} from '../service/product-service';
declare const Swal:any;

@Component({
  selector: 'app-product',
  imports: [ProductCard, NgStyle, NgIf, NgFor],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  constructor(public cartService: CartService, public products: ProductService) {
  }

  trackByProductId(index: number, product: any): any {
    return product.id; // assuming each product has an 'id' property
  }

  onAddToCart(product:any){
    this.cartService.addItem(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Product has been added",
      showConfirmButton: false,
      timer: 1500
    });
  }
}
