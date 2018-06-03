import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { Day0Component } from "./day0/day0.component";

const routes: Routes = [
    { path: "", redirectTo: "/index", pathMatch: "full" },
    { path: "index", component: IndexComponent },
    { path: "about", component: AboutComponent },
    { path: "day0", component: Day0Component },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ],
    declarations: []
})

export class AppRoutingModule { }
