import { ReactiveFormsModule } from '@angular/forms';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { FormsModule } from '@angular/forms';



import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    MatListModule,
    MatSelectModule,
    FormsModule
  ],
})
export class TaskModule {
  
 }
