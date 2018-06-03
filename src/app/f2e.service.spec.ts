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
});
