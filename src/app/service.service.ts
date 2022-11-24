import { Injectable } from '@angular/core';


import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  url:any = "http://13.233.164.98/predictPrice";

  predictPrice(data:any): Observable<any> {
    //console.log(data);

    //console.log(this.url+ "?Area=" + data.Area + "&BedRooms=" + data.Bedrooms + "&BathRooms=" + data.Bathrooms);

    return this.http
      .get<any>(this.url+ "?Area=" + data.Area + "&BedRooms=" + data.Bedrooms + "&BathRooms=" + data.Bathrooms)
  }

}

