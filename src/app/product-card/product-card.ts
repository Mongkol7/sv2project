import {Component, EventEmitter, Input, Output} from '@angular/core';
import {JsonPipe, CurrencyPipe} from '@angular/common';
import {KhmerCurrencyPipe} from '../khmer-currency-in-pipe';
import {RouterLink} from '@angular/router';
import {DollarToKhmerPipe} from '../dollar-to-khmer-pipe';


@Component({
  selector: 'app-product-card',
  imports: [JsonPipe, CurrencyPipe, KhmerCurrencyPipe, DollarToKhmerPipe, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  //Input: for child to receieve Data(static json) from parent(app.html)
  @Input() product: any = [];
  @Output() addToCart:any = new EventEmitter<any>();

  onAddToCart(product: any){
    return this.addToCart.emit(product);
  }

  protected readonly Math = Math;

}
