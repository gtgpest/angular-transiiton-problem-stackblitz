import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {Page1Component} from './features/page1/page1.component';
import {Page2Component} from './features/page2/page2.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {routes} from "./common/routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    RouterModule.forRoot(routes),
    RouterOutlet,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
