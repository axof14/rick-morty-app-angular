import { CharacterService } from './../../core/services/character.service';
import { DetailsComponent } from './../details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';

const routes: Routes = [
  {
    path: '', component: ListComponent
  },
  {
    path: `:id`, component: DetailsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[CharacterService]
})
export class ListRoutingModule { }
