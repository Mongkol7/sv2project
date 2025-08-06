import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MainSlider} from './main-slider/main-slider';
import {ProductCard} from './product-card/product-card';
import {NgStyle, NgIf, NgFor, UpperCasePipe, LowerCasePipe, DatePipe,
  CurrencyPipe, DecimalPipe, PercentPipe, SlicePipe, JsonPipe, TitleCasePipe} from '@angular/common';
import {KhmerCurrencyPipe} from './khmer-currency-in-pipe';
import {CartService} from './service/cart-service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    MainSlider,
    ProductCard,
    NgStyle,
    NgIf,
    NgFor,
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    SlicePipe,
    JsonPipe,
    TitleCasePipe,
    KhmerCurrencyPipe

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'SV2_TODO_ng';

  //constructor: is Method that execute automatically;
  //After create service has to create constructor(cartService),which extend from Service;
  constructor(public cartService: CartService) {}

}
