import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[CommonModule],
  providers:[BaseComponent]
})
export class BaseModule { }
