import { NgModule } from '@angular/core';

import { PaymentComponent } from '@features/payment/payment.component';


@NgModule({
  declarations: [PaymentComponent],
  exports: [PaymentComponent]
})
export class PaymentModule { }
