import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoComparisonService {

  constructor(private http : HttpClient) { }

  getPhotos():Observable<any>{
  const url =environment.baseUrl;
    return this.http.get(url).pipe(
      catchError(
        (error)=>
        throwError(error)
      )
    )
  }
}
