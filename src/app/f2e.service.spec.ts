import { TestBed, async, inject } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { F2eService } from "./f2e.service";

describe("F2eService", () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [F2eService]
        });
    });

    it("should be created", inject([F2eService], (service: F2eService) =>
    {
        expect(service).toBeTruthy();
    }));

    it("should get response about sign up number", inject([F2eService], (service: F2eService) =>
    {
        service.get_signup().subscribe( info =>
        {   // service is decleared, you do NOT need to write F2eService !
            expect( info.total ).toBeGreaterThan( 0 );
        });
    }));
    /*
    F2eService.get_signup.subscribe( info =>
        {
            // expect(users.length).toBe(2);
        });
    */
});
