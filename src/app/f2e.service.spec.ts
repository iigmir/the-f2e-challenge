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
            // https://blog.angulartraining.com/how-to-write-unit-tests-for-angular-code-that-uses-the-httpclient-429fa782eb15
            expect( info.total ).toBeGreaterThan( 0 );
        });
    }));
});
