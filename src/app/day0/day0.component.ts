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
    constructor( private F2eService: F2eService ) { }
    ngOnInit()
    {
        this.F2eService.get_signup().subscribe( res =>
        {
            if ( res.success === true )
            {
                // console.log( res );
                this.resigned = res.total;
            }
        });
    }
}
