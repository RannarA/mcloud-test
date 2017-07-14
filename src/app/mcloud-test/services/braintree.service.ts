import { Injectable } from '@angular/core';

declare var braintree: any;

@Injectable()
export class BraintreeService {

  braintreeClient: any;

  constructor() {
    this.braintreeClient = braintree;
  }

}
