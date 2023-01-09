import {Component, OnInit} from '@angular/core';
import {ChildrenOutletContexts, Router} from "@angular/router";
import { fadeAnimation, slideAnimation } from './common/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //animations: [slideAnimation]
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit{

  constructor(private _contexts: ChildrenOutletContexts, private _router: Router) {
  }

  getRouteAnimationData() {
    return this._contexts.getContext("primary")?.route?.snapshot?.data?.[
      "animation"
      ];
  }

  ngOnInit(): void {
    this._router.events.subscribe((event) => {
      console.log(event);
    });
  }
}
