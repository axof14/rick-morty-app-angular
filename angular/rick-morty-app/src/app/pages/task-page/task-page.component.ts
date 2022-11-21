import { LocationService } from './../../core/services/location.service';
import { Location } from './models/location';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss'],
  providers:[LocationService]
})
export class TaskPageComponent implements OnInit {
  public locations: Location[] = []
  // public list: any = []
  
  selectedLocation: Location = new Location();
  delete(){
    this.locations = this.locations.filter(el => el != this.selectedLocation);
    this.selectedLocation = new Location();
  }
  addOrEdit(){
    if( this.selectedLocation.id === 0){
      this.selectedLocation.id = this.locations.length+1;
      this.locations.push(this.selectedLocation);
    }
  
    
    this.selectedLocation = new Location();
  }
  openToEdit(location:Location){
    this.selectedLocation = location
  }
  constructor(private _locationService: LocationService) {}

    ngOnInit(){
    
      this._locationService.getLocations().subscribe(
        res => {
          if(res){
            this.locations = res.results;
            console.log(this.locations)
          }else{}
        },
        error =>(console.log(error))
      )
  }

}
