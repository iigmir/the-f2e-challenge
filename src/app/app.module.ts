import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavbarComponent } from "./navbar/navbar.component";
import { IndexComponent } from "./index/index.component";
import { AboutComponent } from "./about/about.component";
import { Day0Component } from "./day0/day0.component";
import { Week1Component } from "./week1/week1.component";

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule,
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        IndexComponent,
        AboutComponent,
        Day0Component,
        Week1Component
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
