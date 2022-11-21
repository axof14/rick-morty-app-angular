import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ListRoutingModule } from './list-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatCardModule,
    MatButtonModule,
    CoreModule,
    FormsModule

  ],
  exports:[
    CardComponent
  ]
})
export class ListModule { }
