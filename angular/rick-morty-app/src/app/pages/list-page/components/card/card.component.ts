import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../models/icharacters.interface';
import { CharacterService } from 'src/app/core/services/character.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers:[CharacterService]

})
export class CardComponent implements OnInit {
  
  public list: ICharacter[] = []
  // public list: any = []
  
  public filter: any ;

  constructor(private _characterService: CharacterService) {
    
    this.filter = ''}

    ngOnInit(){
    
      this._characterService.getList().subscribe(
        res => {
          if(res){
            this.list = res.results;
            console.log(this.list)
          }else{}
        },
        error =>(console.log(error))
      )
  }
  
}
