import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {path} from "../../common/routes";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  constructor(private _router: Router) {
  }

  go() {
    this._router.navigate([`/${path.Page1}`]).then();
  }
}
