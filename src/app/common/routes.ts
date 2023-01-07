import {Route} from "@angular/router";
import {Page1Component} from "../features/page1/page1.component";
import {Page2Component} from "../features/page2/page2.component";

export const enum path {
  Page1 = "page1",
  Page2 = "page2",

}

export const routes: Route[] = [
  {
    path: path.Page1,
    component: Page1Component,
    data: { animation: path.Page1 },
  },
  {
    path: path.Page2,
    component: Page2Component,
    data: { animation: path.Page2 },
  },

  { path: "", redirectTo: path.Page1, pathMatch: "full" },
  { path: "**", redirectTo: path.Page1 },
];
