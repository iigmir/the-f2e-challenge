import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { IndexComponent } from "./index/index.component";

import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";
import { Day0Component } from "./day0/day0.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        IndexComponent,
        AboutComponent,
        Day0Component
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
