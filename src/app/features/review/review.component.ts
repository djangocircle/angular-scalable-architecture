import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@base/base.component';

@Component({
  selector: 'app-review',
  templateUrl: 'review.component.html',
  styleUrls: []
})
export class ReviewComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
