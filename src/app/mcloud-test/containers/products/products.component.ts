import { Component, OnInit } from '@angular/core';
import {MarketcloudService} from "../../services/marketcloud.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(private marketcloudService: MarketcloudService,
              private cartService: CartService) { }

  ngOnInit() {
    this.marketcloudService.client.products.list({}, (err, products) => {
      this.products = products.data;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

}
