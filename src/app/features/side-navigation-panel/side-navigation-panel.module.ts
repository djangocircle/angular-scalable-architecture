import { NgModule } from '@angular/core';

import { SideNavigationPanelComponent } from '@features/side-navigation-panel/side-navigation-panel.component';


@NgModule({
  declarations: [SideNavigationPanelComponent],
  exports: [SideNavigationPanelComponent]
})
export class SideNavigationPanelModule { }
