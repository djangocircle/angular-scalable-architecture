import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@base/base.component';

@Component({
  selector: 'app-features',
  templateUrl: 'features.component.html',
  styleUrls: []
})
export class FeaturesComponent extends BaseComponent implements OnInit {

  public selectedMenu : string = 'profile';
  constructor() {
    super();
  }

  ngOnInit() {
  }

  menuChangeCallBack(currentMenu : string): void{
    this.selectedMenu = currentMenu;
  }

}
