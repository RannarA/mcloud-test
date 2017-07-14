import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MarketcloudService} from "./services/marketcloud.service";
import {MdButtonModule, MdCardModule, MdGridListModule, MdSidenavModule, MdToolbarModule} from "@angular/material";
import { ProductsComponent } from './containers/products/products.component';
import {McloudTestComponent} from "./mcloud-test/mcloud-test.component";
import {CartService} from "./services/cart.service";
import { CheckoutComponent } from './containers/checkout/checkout.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpModule} from "@angular/http";
import {BraintreeService} from "./services/braintree.service";

const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'checkout',      component: CheckoutComponent },
];

@NgModule({
  declarations: [
    // components
    McloudTestComponent,
    ProductsComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdSidenavModule,
    MdGridListModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    // services
    MarketcloudService,
    CartService,
    BraintreeService
  ],
  exports: [
    // export main component for AppModule
    McloudTestComponent
  ]
})
export class McloudTest {}
