import { NgModule } from '@angular/core';

import { BaseModule } from '@base/base.module';
import { FooterComponent } from '@shared/footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    BaseModule
  ],
  exports: [FooterComponent]
})

export class FooterModule { }
