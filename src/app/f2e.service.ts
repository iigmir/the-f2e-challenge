import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { F2E } from "./f2e";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class F2eService
{
    constructor(
        private http: HttpClient
    ) { }

    getHeroes (): Observable<F2E[]>
    {
        return this.http.get<F2E[]>("https://yesno.wtf/api")
          .pipe(
                tap(heroes => this.log(`fetched heroes`)),
                catchError(this.handleError("getHeroes", []))
          );
    }
}
