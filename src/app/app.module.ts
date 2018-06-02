import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { IndexComponent } from "./index/index.component";

import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        IndexComponent,
        AboutComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
