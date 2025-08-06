import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Product} from './product/product';
import {Cart} from './cart/cart';
import {Error404} from './error-404/error-404';

export const routes: Routes = [
  {path :'', component:Home},
  {path: 'home', component:Home},
  {path:'product', component:Product},
  {path:'cart', component:Cart},
  {path:'**', component: Error404}

];
