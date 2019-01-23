import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
// import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
// import { admin } from './view-model';




@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {


  _url = 'http://localhost:3000/viewStudent';
  get_url='http://localhost:3000/'
  constructor(private _http: HttpClient) { }



  // enroll(user: admin) {
  //   return this._http.post<any>(this._url,user)
  //     .pipe(catchError(this.errorHandler))

  // }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

  getData() {
    return this._http.get<any>(this._url); // get data from end point and return them

  }
}
