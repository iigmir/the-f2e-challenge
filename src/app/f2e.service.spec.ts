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

    it("should post response for email", inject([F2eService], (service: F2eService) =>
    {
        const case0 = {};
        const case1 = { "email" : "foobar@example.com" };
        const case2 = { "email" : "roc120j@gmail.com" };

        service.is_sign_up( case0 ).subscribe( info =>
        {   // There's NO options at all, so it should fail
            expect( this.success ).toBe( false );
            expect( this.message ).toBe( "email 參數未提供" );
            expect( this.nickName ).toBeUndefined();
            expect( this.timeStamp ).toBeUndefined();
            expect( this.skill ).toBeUndefined();
        });

        service.is_sign_up( case1 ).subscribe( info =>
        {   // Not signed up
            expect( this.success ).toBe( false );
            expect( this.message ).toBe( "email 參數未提供" );
            expect( this.nickName ).toBeUndefined();
            expect( this.timeStamp ).toBeUndefined();
            expect( this.skill ).toBeUndefined();
        });

        service.is_sign_up( case2 ).subscribe( info =>
        {   // My Email
            expect( this.success ).toBe( true );
            expect( this.message ).toBe( "報名成功！" );
            expect( this.nickName ).not.toBeUndefined();
            expect( this.timeStamp ).not.toBeUndefined();
            expect( this.skill ).not.toBeUndefined();
        });
    }));
});
