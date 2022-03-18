import { Hero } from './../../models/Hero';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css'],
})
export class HeroItemComponent implements OnInit {
  @Input('heroData') heroes: any;
  @Output('removeH') removeHero = new EventEmitter();
  @Output('editH') editHero = new EventEmitter();
  @Output('submitFormH') submitFormHero = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  removeH(): void {
    this.removeHero.emit(this.heroes);
  }
  editH(): void {
    this.editHero.emit(this.heroes);
  }
}
