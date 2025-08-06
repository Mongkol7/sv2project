import { Injectable } from '@angular/core';
declare const axios:any;
declare const $:any;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {
    //coz in Axios also has Keyword this, so has to fake the variable;
    let vm:this = this;
    $.LoadingOverlay("show");
    // Make a request for a user with a given ID
    //put in constructor, coz constructor only execute once;
    //Note: constructor in service is a FIX API, which not in loop;
    //axios: for link API(json file) to this Project;
    axios.get(this.url)
      .then(function (response:any) {
        //handle success
        vm.products = response.data;
      })
      .catch(function (error:any) {
        // handle error
        console.log(error);
      }).finally(function (){
      $.LoadingOverlay("hide");
    })
  }
  private products:any = [];
  private url:string = 'https://sv-gen-api.bczin2zin2takeo.us/api/product';

  getProducts(){
    return this.products;
  }
}
