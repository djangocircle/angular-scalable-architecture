import { NgModule } from '@angular/core';

import { MessagesComponent } from '@features/messages/messages.component';


@NgModule({
  declarations: [MessagesComponent],
  exports: [MessagesComponent]
})
export class MessagesModule { }
