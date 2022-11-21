import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CharacterService {
  url = 'https://rickandmortyapi.com/api/character';
  constructor(private _http: HttpClient) { 
     
  }
    
  getList():Observable<any>{
    return this._http.get(this.url)
  }
}