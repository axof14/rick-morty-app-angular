import { CharacterService } from '../../services/character.service';
import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../models/icharacters.interface';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],

})
export class CardComponent implements OnInit {
  
  public list: ICharacter[] = []
  // public list: any = []
  
  public filter = '';

  constructor(private characterService: CharacterService) { }

    ngOnInit(){
      this.characterService.getList().subscribe(
        res => {
          if(res){
            this.list = res.results;
          }
        },
        error =>(console.log(error))
      )
  }
  
}
