import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CharacterService {
  constructor(private http: HttpClient) { }
    
  getList():Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/character?')
  }
}