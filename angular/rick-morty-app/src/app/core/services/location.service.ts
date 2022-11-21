import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class LocationService {
  url = 'https://rickandmortyapi.com/api/location';
  constructor(private _http: HttpClient) { 
     
  }
    
  getLocations():Observable<any>{
    return this._http.get(this.url)
  }
}