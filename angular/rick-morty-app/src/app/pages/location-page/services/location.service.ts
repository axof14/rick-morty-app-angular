import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class LocationService {
  constructor(private http: HttpClient) { }
    
  getLocations():Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/location')
  }
}