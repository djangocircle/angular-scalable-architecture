import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '@base/base.component';


@Component({
  selector: 'app-side-navigation-panel',
  templateUrl: 'side-navigation-panel.component.html',
  styleUrls: []
})
export class SideNavigationPanelComponent extends BaseComponent implements OnInit {

  @Output() menuChangeListener: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    super();
  }

  ngOnInit() {
  }

  onMenuClick(menu : string) : void{
    this.menuChangeListener.emit(menu);
  }
}
