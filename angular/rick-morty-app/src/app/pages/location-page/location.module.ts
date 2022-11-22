import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationRoutingModule } from './location-routing.module';
import { FormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    LocationRoutingModule,
    MatInputModule,
  ],
})
export class LocationModule {
  
 }
