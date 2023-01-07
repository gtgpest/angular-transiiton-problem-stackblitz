import {Component, OnInit} from '@angular/core';
import {ChildrenOutletContexts, Router} from "@angular/router";
import {slideInAnimation} from "./common/route-slide.animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
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
