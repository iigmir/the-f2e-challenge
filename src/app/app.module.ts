import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AppRoutingModule } from './/app-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        IndexComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
