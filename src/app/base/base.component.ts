import { OnInit, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable()
export class BaseComponent implements OnInit {

  public imagePrefix = environment.imagePrefix;
  ngOnInit() {
  }

}
