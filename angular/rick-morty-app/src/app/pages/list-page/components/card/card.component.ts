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
  public page:number = 0;
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
  prevPage(){
    if(this.page == 0){
    return}else if(this.page > 0){this.page -= 5}

  }
  nextPage(){
    
    if(this.page == 15){
    return} else if(this.page >= 0){this.page +=5}
  }
  
}
