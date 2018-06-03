import { Component, OnInit } from "@angular/core";
import { F2eService } from "../f2e.service";

@Component({
    selector: "app-day0",
    templateUrl: "./day0.component.html",
    styleUrls: ["./day0.component.css"]
})

export class Day0Component implements OnInit
{
    resigned: Number = 0;
    success: Boolean = false;
    input_email: String = "";

    constructor( private service: F2eService ) { }
    ngOnInit()
    {
        this.service.get_signup().subscribe( res =>
        {
            this.success = res.success;
            this.resigned = res.total;
        });
    }
}
