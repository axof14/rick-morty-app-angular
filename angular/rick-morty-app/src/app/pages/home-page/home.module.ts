import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './components/about/about.component';
import { DescriptionComponent } from './components/description/description.component';
import { HeroComponent } from './components/hero/hero.component';


@NgModule({
  declarations: [
    AboutComponent,
    DescriptionComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
    AboutComponent,
    DescriptionComponent,
    HeroComponent
  ]
})
export class HomeModule { }
