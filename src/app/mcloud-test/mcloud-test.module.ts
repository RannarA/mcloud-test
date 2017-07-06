import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MarketcloudService} from "./services/marketcloud.service";
import {MdButtonModule, MdCardModule, MdGridListModule, MdSidenavModule} from "@angular/material";
import { ProductsComponent } from './containers/products/products.component';
import {McloudTestComponent} from "./mcloud-test/mcloud-test.component";

@NgModule({
  declarations: [
    // components
    McloudTestComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdSidenavModule,
    MdGridListModule,
    MdCardModule,
    MdButtonModule
  ],
  providers: [
    // services
    MarketcloudService
  ],
  exports: [
    // export main component for AppModule
    McloudTestComponent
  ]
})
export class McloudTest {}
