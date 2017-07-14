import { Component, OnInit } from '@angular/core';
import {MarketcloudService} from '../../services/marketcloud.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Http, Headers, RequestOptions} from '@angular/http';
import {BraintreeService} from '../../services/braintree.service';
import {CartService} from '../../services/cart.service';

declare var require: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
  testForm: any;
  braintreeNonce: any;

  constructor(private marketcloudService: MarketcloudService,
              private fb: FormBuilder,
              private http: Http, private braintreeService: BraintreeService, private cartService: CartService) { }

  ngOnInit() {
    this.testForm = this.fb.group({
    });

    this.marketcloudService.client.paymentMethods.list('')
      .then(response => {
        console.log(response);
      });

    this.marketcloudService.client.payments.braintree.createClientToken()
      .then ( (response) => {
        // We got the Braintree Token from Marketcloud
        this.braintreeService.braintreeClient.setup(response.data.clientToken, 'dropin', {
          container: 'dropin-container',
          paypal: {
            singleUse: true,
            amount: 10.00,
            currency: 'USD'
          },
          onPaymentMethodReceived: this.setNonce.bind(this)
        });
      })
      .catch( (error) => {
        alert('An error has occurred, payment gateway not available');
        console.log(error);
      })

  }

  setNonce(res) {
    console.log(res.nonce, this)
    this.braintreeNonce = res.nonce;
  }

  pay() {
    const that = this;

    this.marketcloudService.client.orders.create({
      shipping_address : {
        'full_name': 'John Doe',
        'user_id': 13362,
        'address1': 'Fake Street 123',
        'address2': 'Apt. 6',
        'city': 'Ancona',
        'country': 'Italy',
        'postal_code': '60125',
        'email': 'john.doe@example.com'},
      billing_address : {'full_name': 'John Doe',
        'user_id': 13362,
        'address1': 'Fake Street 123',
        'address2': 'Apt. 6',
        'city': 'Ancona',
        'country': 'Italy',
        'postal_code': '60125',
        'email': 'john.doe@example.com'},
      cart_id : Number(this.cartService.cart.id)
    })
      .then( (response) => {

        // Order was correctly created, we now handle the payment
        // Making the transaction
        return this.marketcloudService.client.payments.create({
          method : 'Braintree',
          nonce : that.braintreeNonce,
          order_id : response.data.id
        })
      })
      .then( (response) => {
        console.log(response)
      }).catch( (response) => {
      console.log('An error has occurred creating the order', response);
    })
  }






}
