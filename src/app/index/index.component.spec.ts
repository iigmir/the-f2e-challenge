import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IndexComponent } from "./index.component";

describe("IndexComponent", () =>
{
    let component: IndexComponent;
    let fixture: ComponentFixture<IndexComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ IndexComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IndexComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it(`should have as title '前端修練精神時光屋'`, async(() =>
    {
        const fixture = TestBed.createComponent(IndexComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual("前端修練精神時光屋");
    }));

    it("should render title in a h1 tag", async(() =>
    {
        const fixture = TestBed.createComponent(IndexComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("h1").textContent).toContain("前端修練精神時光屋");
    }));
});
