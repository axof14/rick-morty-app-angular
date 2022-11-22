import { PaginatorPipe } from './pipes/paginator.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { RouterModule } from '@angular/router';
import { FilterCharactersPipe } from './pipes/filter-characters.pipe';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    FilterCharactersPipe,
    PaginatorPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    FilterCharactersPipe,
    PaginatorPipe
  ],
})
export class CoreModule { }
