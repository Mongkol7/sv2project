import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe, CurrencyPipe, NgIf, NgClass } from '@angular/common';
import { KhmerCurrencyPipe } from '../khmer-currency-in-pipe';
import { RouterLink } from '@angular/router';
import { DollarToKhmerPipe } from '../dollar-to-khmer-pipe';
import { CartService } from '../service/cart-service';

declare const axios: any;
declare const $: any;
declare const Swal: any;

@Component({
  selector: 'app-product-detail',
  imports: [JsonPipe, CurrencyPipe, KhmerCurrencyPipe, RouterLink, DollarToKhmerPipe, NgIf, NgClass],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  constructor(
    public route: ActivatedRoute,
    public cartService: CartService
  ) { }

  public product: any = null;
  public selectedQuantity: number = 1;

  ngOnInit(): void {
    const product_id = this.route.snapshot.queryParamMap.get('product_id');
    let vm = this;
    let url = 'https://sv-gen-api.bczin2zin2takeo.us/api/product_detail?id=' + product_id;

    $.LoadingOverlay("show");

    axios.get(url)
      .then(function (response: any) {
        console.log(response.data);
        vm.product = response.data;
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .finally(function () {
        $.LoadingOverlay("hide");
      });
  }

  addToCart(): void {
    if (!this.product || !this.product.name) {
      Swal.fire('Error', 'Product not loaded yet', 'error');
      return;
    }

    // Add the item multiple times based on selectedQuantity
    for (let i = 0; i < this.selectedQuantity; i++) {
      this.cartService.addItem({
        name: this.product.name,
        price: this.product.price,
        imageUrl: this.product.imageUrl,
        id: this.product.id
      });
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${this.selectedQuantity} x ${this.product.name} Added!`,
      showConfirmButton: false,
      timer: 1500
    });
  }

  changeQuantity(change: number) {
    const newQuantity = this.selectedQuantity + change;
    if (newQuantity >= 1 && newQuantity <= 50) {
      this.selectedQuantity = newQuantity;
    }
  }

  onQuantityChange(event: any) {
    const value = parseInt(event.target.value);
    if (value >= 1 && value <= 50) {
      this.selectedQuantity = value;
    }
  }

  protected readonly JSON = JSON;
}
