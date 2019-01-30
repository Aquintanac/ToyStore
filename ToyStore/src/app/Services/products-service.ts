import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private apiUrl = 'http://localhost:51305/api/products/';

    constructor(private http: HttpClient) { }

    public getAll(): Observable<any> {
        return this.http.get(this.apiUrl + 'get');
    }
}
