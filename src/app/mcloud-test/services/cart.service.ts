import { Injectable } from '@angular/core';
import {MarketcloudService} from "./marketcloud.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class CartService {
  cart: any;
  cartSize: any;

  constructor(private marketcloudService: MarketcloudService) {
    this.cartSize = new Subject();
  }

  addToCart(product: any) {
    if (this.cart) {
      this.marketcloudService.client.carts.add(this.cart.id, [{'product_id': product.id, 'quantity': 1}])
        .then((response) => {
          this.cart = response.data;
          this.cartSize.next(this.cart.items.length);
        });

    } else {
      this.marketcloudService.client.carts.create({
        items: [{'product_id': product.id, 'quantity': 1}]
      }).then((response) => {
        this.cart = response.data;
        this.cartSize.next(this.cart.items.length);
      });
    }
  }

}
