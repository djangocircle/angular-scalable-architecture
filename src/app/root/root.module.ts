import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderModule } from '@shared/header/header.module';
import { FooterModule } from '@shared/footer/footer.module';
import { AppRoutingModule } from './root-routing.module';
import { AppComponent } from './root.component';
import { FeaturesModule } from '@features/features.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
