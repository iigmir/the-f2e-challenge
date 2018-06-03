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

    it("should have number after AJAX" , () =>
    {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        inject(
            [HttpTestingController, F2eService],
            (httpMock: HttpTestingController, service: F2eService) =>
        {   // We call the service
            service.get_signup().subscribe(data =>
            {
                const output_number = parseInt( compiled.querySelector(".value").innerText , 10 );

                expect( data.success ).toBe( true );
                expect( data.total ).toBeGreaterThan( 0 );
                expect( output_number ).toBeGreaterThan(0);
                // expect(data.pageInfo.pageNumber).toBe(0);
                // expect(data.data.length).toBe(7);
            });
            // We set the expectations for the HttpClient mock
            // const req = httpMock.expectOne('http://.../data/contacts');
            // expect(req.request.method).toEqual('GET');
        });
    });

    it("should have something can let user type Email" , () =>
    {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect( compiled.querySelector('input[type="email"]').length > 0 );
    });
});
