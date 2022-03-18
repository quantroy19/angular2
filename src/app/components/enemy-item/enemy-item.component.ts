import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enemy-item',
  templateUrl: './enemy-item.component.html',
  styleUrls: ['./enemy-item.component.css'],
})
export class EnemyItemComponent implements OnInit {
  @Input('dataEnemy') enemy: any;
  @Output('removeE') removeEnemy = new EventEmitter();
  @Output('editE') editEnemy = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  removeEnemyData() {
    this.removeEnemy.emit(this.enemy);
  }
  editEnemyData() {
    this.editEnemy.emit(this.enemy);
  }
}
