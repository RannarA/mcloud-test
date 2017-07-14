import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-mcloud-test',
  templateUrl: './mcloud-test.component.html',
  styleUrls: ['./mcloud-test.component.sass']
})
export class McloudTestComponent implements OnInit {
  cartItemsCount: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartSize.subscribe(value => {
      this.cartItemsCount = value;
    });
  }

}
