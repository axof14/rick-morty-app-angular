import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CharacterService {
  public pagex:number = 1
  constructor(private http: HttpClient) { }
    
  getList():Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/character?page='+ this.pagex)
  }
}