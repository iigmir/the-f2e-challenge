import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    styleUrls: ["./index.component.css"]
})

export class IndexComponent implements OnInit {
    title: String = "前端修練精神時光屋";
    constructor() {}
    ngOnInit() {}
}
