import { Injectable } from '@angular/core';

declare const Marketcloud: any;

import '../../../../node_modules/marketcloud-js/dist/marketcloud.min';

@Injectable()
export class MarketcloudService {

  client: any;
  utils: any;

  constructor() {
    this.client = new Marketcloud.Client({
      publicKey : '1a4412b2-7111-456e-b235-0c699d3a9ac0'
    });

    this.utils = Marketcloud.Utils;
  }

}
