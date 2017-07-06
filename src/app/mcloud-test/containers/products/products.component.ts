import { Component, OnInit } from '@angular/core';
import {MarketcloudService} from "../../services/marketcloud.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(private marketcloudService: MarketcloudService) { }

  ngOnInit() {
    this.marketcloudService.client.products.list({}, (err, products) => {
      this.products = products.data;
    });
  }

}
