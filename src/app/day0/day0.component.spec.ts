import { async, ComponentFixture, TestBed, inject, fakeAsync } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { FormsModule, Validators, ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";

import { Day0Component } from "./day0.component";
import { F2eService } from "../f2e.service";

describe("Day0Component", () =>
{
    let component: Day0Component;
    let fixture: ComponentFixture<Day0Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ Day0Component ],
            imports: [ HttpClientTestingModule, FormsModule ]
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
        expect( component ).toBeTruthy();
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
            });
        });
    });

    it("should check users' Email correct" , () =>
    {
        const case1 = "ksjng";
        const case2 = 3289528356;
        const case3 = "3289528356@hotmail.com";
        const case4 = "root@3289528356.com";

        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;
        const compiled = fixture.debugElement.nativeElement;

        expect( component.search_email( "" ) ).toBeFalsy();
        expect( component.search_email( case1 ) ).toBeFalsy();
        expect( component.search_email( case2 ) ).toBeFalsy();
        expect( component.search_email( "3289528356@hotmail.com" ) ).toBeTruthy();
        expect( component.search_email( "root@3289528356.com" ) ).toBeTruthy();
        expect( component.search_email( "roc120j@gmail.com" ) ).toBeTruthy();
    });
});
