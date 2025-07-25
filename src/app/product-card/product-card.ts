import { Component, Input } from '@angular/core';
import {JsonPipe, CurrencyPipe} from '@angular/common';
import {KhmerCurrencyPipe} from '../khmer-currency-in-pipe';
import {DollarToKhmerPipe} from '../dollar-to-khmer-pipe';

@Component({
  selector: 'app-product-card',
  imports: [JsonPipe, CurrencyPipe, KhmerCurrencyPipe, DollarToKhmerPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  //Input: for child to receieve Data(static json) from parent(app.html)
  @Input() product: any = [];

  protected readonly Math = Math;
}
