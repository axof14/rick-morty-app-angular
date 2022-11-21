import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class DetailsService {
  public url = `https://rickandmortyapi.com/api/character/`;
  public id? :number;
  constructor(
    private _http: HttpClient,
    private route: ActivatedRoute
    ) { }
    
  getDetails():Observable<any>{
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    })
    return this._http.get(this.url+this.id)
  }
}