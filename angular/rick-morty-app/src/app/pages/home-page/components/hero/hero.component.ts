import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public banner:string = 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2019/05/rick-morty-temporada-4-llegara-noviembre.jpg?h=0046539c&itok=3V9Cx3aQ'
  constructor() { }

  ngOnInit(): void {
  }

}
