import { IDetails } from './models/idetails.interface';
import { DetailsService } from './../../core/services/details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [DetailsService]
})
export class DetailsComponent implements OnInit {
  // public details: IDetails[] = [] 

  // Error TS2339: Property 'name' does not exist on type IDetails[]
  public details: any = []


  constructor(
    private _detailsService: DetailsService,

  ) { }

  ngOnInit(){
   
    this._detailsService.getDetails().subscribe(
      res => {
        if(res){
          this.details = res
        }
      },
      error =>(console.log('ERROR FETCHING DATA',error))
    )
    
  }
  
};