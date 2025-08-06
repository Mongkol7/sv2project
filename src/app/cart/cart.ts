import { Component } from '@angular/core';
import {CartService} from '../service/cart-service';
import {JsonPipe, CurrencyPipe} from '@angular/common';
import {NgStyle, NgIf, NgFor} from '@angular/common';
import {RouterLink} from '@angular/router';
import {DollarToKhmerPipe} from '../dollar-to-khmer-pipe';
declare const Swal:any;

@Component({
  selector: 'app-cart',
  imports: [JsonPipe,  NgStyle, NgIf, NgFor, RouterLink, DollarToKhmerPipe, CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cartService: CartService) {
  }
  trackByItemId(index: number, item: any): any {
    return item.id; // or return item.id ? item.id : index;
  }

  removeItem(item:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure🤬?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result:any) => {
      if (result.isConfirmed) {
        this.cartService.removeItem(item);
        swalWithBootstrapButtons.fire({
          title: "Removed!",
          text: "Your item has been removed.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });

  }
  decreaseQty(item:any){
    if(item.qty > 1){
      this.cartService.decrementQty(item);
    }
  }
  increaseQty(item:any){
    this.cartService.incrementQty(item);
  }

}
