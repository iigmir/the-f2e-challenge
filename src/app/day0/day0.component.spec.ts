import { async, ComponentFixture, TestBed, inject, fakeAsync } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

// import {  } from '@angular/http/testing';

import { Day0Component } from "./day0.component";
import { F2eService } from "../f2e.service";

describe("Day0Component", () =>
{
    let component: Day0Component;
    let fixture: ComponentFixture<Day0Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ Day0Component ],
            imports: [ HttpClientTestingModule ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Day0Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () =>
    {
        expect(component).toBeTruthy();
    });

    it("should have something can let user type Email" , () =>
    {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect( compiled.querySelector('input[type="email"]').length > 0 );
    });
});
