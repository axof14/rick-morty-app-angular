import { IDetails } from './models/idetails.interface';
import { DetailService } from './services/detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [DetailService]
})
export class DetailsComponent implements OnInit {
  // public details: IDetails[] = [] 

  // Error TS2339: Property 'name' does not exist on type IDetails[]
  public details: any = []


  constructor(
    private detailService: DetailService,

  ) { }

  ngOnInit(){
   
    this.detailService.getDetails().subscribe(
      res => {
        if(res){
          this.details = res
        }
      },
      error =>(console.log('ERROR FETCHING DATA',error))
    )
    
  }
  
};