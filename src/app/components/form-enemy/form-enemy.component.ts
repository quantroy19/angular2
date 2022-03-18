import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-enemy',
  templateUrl: './form-enemy.component.html',
  styleUrls: ['./form-enemy.component.css'],
})
export class FormEnemyComponent implements OnInit {
  @Input('dataFormEnemy') formEnemy: any;
  @Output('submitFormE') submitFormEnemy: any = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  submitFormEnemyData() {
    this.submitFormEnemy.emit();
  }
}
