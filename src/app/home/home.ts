import { Component } from '@angular/core';
import {MainSlider} from '../main-slider/main-slider';
import {ProductCard} from '../product-card/product-card';
import {NgStyle, NgIf, NgFor} from '@angular/common';
import {CartService} from '../service/cart-service';
import {ProductService} from '../service/product-service';
declare const Swal:any;

@Component({
  selector: 'app-home',
  imports: [MainSlider, ProductCard, NgStyle, NgIf, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(public cartService: CartService, public products: ProductService) {
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
  trackByProductId(index: number, product: any): any {
    return product.id; // assuming each product has an 'id' property
  }
}
