import { Component, OnInit } from "@angular/core";
import { FormsModule, Validators, ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";
import { F2eService } from "../f2e.service";
import { F2E } from "../f2e";

@Component({
    selector: "app-day0",
    templateUrl: "./day0.component.html",
    styleUrls: ["./day0.component.css"],
})

export class Day0Component implements OnInit
{
    resigned: Number = 0;
    success: Boolean = false;
    input_email: String = "foobar@example.com";
    // waiting_response: Boolean = false;
    request_status = {
        waiting_response : false,
        never_request : true
    };
    my_info: any;
    readable_time: Object;

    constructor( private service: F2eService ){}
    ngOnInit(): void
    {
        this.service.get_signup().subscribe( res =>
        {
            this.success = res.success;
            this.resigned = res.total;
        });

        // this.my_form = new FormGroup({
        //     "email": new FormControl( this.input_email , [
        //         Validators.required,
        //     ]),
        // });
    }

    search_email( input_value )
    {
        this.request_status["never_request"] = false;
        this.request_status["waiting_response"] = true;

        this.service.is_sign_up( input_value ).subscribe( res =>
        {
            this.request_status["waiting_response"] = false;
            this.my_info = res;
            this.readable_time = new Date( this.my_info["timeStamp"] );
        });
    }
}
