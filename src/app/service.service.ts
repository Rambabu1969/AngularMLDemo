import { Injectable } from '@angular/core';


import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  url:any = "http://13.233.145.243/mru359/predictPrice";

  predictPrice(data:any): Observable<any> {
    
    console.log(this.url+ "?bedRooms=" + data.Bedrooms + "&bathRooms=" + data.Bathrooms + "&area=" + data.Area);

    return this.http
      .get<any>(this.url+ "?bedRooms=" + data.Bedrooms + "&bathRooms=" + data.Bathrooms + "&area=" + data.Area);
  }

}

