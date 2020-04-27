import { NgModule } from '@angular/core';

import { BaseModule } from '@base/base.module';
import { HeaderComponent } from '@shared/header/header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    BaseModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
