import {Component} from '@angular/core';
import {Router} from "@angular/router";
import { Location } from "@angular/common";
import {path} from "../../common/routes";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  constructor(private _location: Location) {
  }

  go() {
    this._location.back();
  }
}
