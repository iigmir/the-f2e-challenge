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
    constructor(
        private http: HttpClient
    ) { }

    getYN (): Observable<F2E[]>
    {
        return this.http
        .get<F2E[]>("https://yesno.wtf/api")
        .pipe(
            tap( heroes => console.log(`fetched`) ),
            catchError( this.handleError )
        );
    }

    private handleError(error: any): Promise<any>
    {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }
}
