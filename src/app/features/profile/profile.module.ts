import { NgModule } from '@angular/core';

import { ProfileComponent } from '@features/profile/profile.component';

@NgModule({
  declarations: [ProfileComponent],
  exports:[ProfileComponent]
})

export class ProfileModule { }
