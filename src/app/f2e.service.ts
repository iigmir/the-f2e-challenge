import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { F2E } from "./f2e";

const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
    providedIn: "root"
})

export class F2eService
{
    private API: String = "https://www.thef2e.com/api/";

    constructor(
        private http: HttpClient
    ) { }

    example (): Observable<F2E["example"]>
    {
        return this.http
        .get<F2E["example"]>("https://yesno.wtf/api")
        .pipe(
            tap( heroes =>
            {
                console.log(`fetched`);
                return heroes;
            }),
            catchError( this.handleError )
        );
    }

    get_signup (): Observable<F2E["signup_count"]>
    {
        return this.http.get<F2E["signup_count"]>("https://www.thef2e.com/api/signUpTotal")
        .pipe(
            tap( data => data ),
            catchError( this.handleError )
        );
    }

    is_sign_up ( input_email ): Observable<F2E["signup_info"]>
    {
        const url_api = this.API + "isSignUp";
        const input_api = { "email" : input_email };
        return this.http.post<F2E["signup_info"]>( url_api , input_api )
        .pipe(
            tap( data => data ),
            catchError( this.handleError )
        );
    }

    private handleError(error: any): Promise<any>
    {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }
}
