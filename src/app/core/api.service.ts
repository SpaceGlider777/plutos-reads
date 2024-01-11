import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:5000/';

  constructor(private httpClient: HttpClient) { }

  get(path: string): Observable<any> {
    return this.httpClient.get(this.url + path).pipe(
      catchError(err => {
        return throwError(() => err);
      })
    );
  }
}
