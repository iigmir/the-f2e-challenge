import { Component, OnInit } from "@angular/core";
import { F2eService } from "../f2e.service";

@Component({
    selector: "app-day0",
    templateUrl: "./day0.component.html",
    styleUrls: ["./day0.component.css"]
})

export class Day0Component implements OnInit {
    constructor( private F2eService: F2eService ) { }
    ngOnInit() {
        this.F2eService.getYN().subscribe();
    }
}
