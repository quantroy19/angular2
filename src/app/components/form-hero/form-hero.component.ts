import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-hero',
  templateUrl: './form-hero.component.html',
  styleUrls: ['./form-hero.component.css'],
})
export class FormHeroComponent implements OnInit {
  @Input('dataFormHero') formHero: any;
  @Output('submitFormH') submitFormHero = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  submitForm() {
    this.submitFormHero.emit(this.formHero);
  }
}
