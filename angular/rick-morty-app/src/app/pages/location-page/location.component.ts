import { LocationService } from './services/location.service';
import { Location } from './models/location';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  providers:[LocationService]
})
export class LocationComponent implements OnInit {
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
  constructor(private locationService: LocationService) {}

    ngOnInit(){
    
      this.locationService.getLocations().subscribe(
        res => {
          if(res){
            this.locations = res.results;
          }else{}
        },
        error =>(console.log(error))
      )
  }

}
