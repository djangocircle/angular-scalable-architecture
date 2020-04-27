import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@base/base.component';

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.component.html',
  styleUrls: []
})
export class MessagesComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
