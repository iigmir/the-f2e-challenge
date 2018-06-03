import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule, FormsModule, Validators } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { NavbarComponent } from "./navbar/navbar.component";

describe("AppComponent", () =>
{
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                NavbarComponent
            ],
            imports: [
                RouterTestingModule,
                ReactiveFormsModule,
                FormsModule,
            ]
        }).compileComponents();
    }));

    it("should create the app", async(() =>
    {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title '前端修練精神時光屋'`, async(() =>
    {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual("前端修練精神時光屋");
    }));

    it("should render title in a h1 tag", async(() =>
    {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("h1").textContent).toContain("前端修練精神時光屋");
    }));
});
