import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {path} from "../../common/routes";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {

  constructor(private _router: Router) {
  }

  go() {
    this._router.navigate([`/${path.Page2}`]).then();
  }
}
