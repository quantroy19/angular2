import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enemies',
  templateUrl: './enemies.component.html',
  styleUrls: ['./enemies.component.css'],
})
export class EnemiesComponent implements OnInit {
  enemies: Array<any> = [];
  formEnemy: any = {
    id: '',
    name: '',
    avatar: '',
    heathling: '',
    armure: '',
  };
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/enemies/').subscribe((data) => {
      this.enemies = data;
    });
  }
  remove(enemy: any) {
    this.http
      .delete(`http://localhost:3000/enemies/${enemy.id}`)
      .subscribe((data) => {
        this.enemies = this.enemies.filter((item) => item.id !== enemy.id);
        // window.location.reload();
      });
  }
  edit(enemy: any): void {
    this.formEnemy = { ...enemy };
  }
  submitForm(): void {
    // console.log(this.formEnemy);
    const newEnemy: any = { ...this.formEnemy };
    if (newEnemy.id == '') {
      this.http
        .post('http://localhost:3000/enemies/', newEnemy)
        .subscribe((data) => {
          this.enemies.push(data);
        });
    } else {
      this.http
        .put(`http://localhost:3000/enemies/${newEnemy.id}`, newEnemy)
        .subscribe((data) => {
          let index = -1;
          this.enemies.forEach((e, i) => {
            if (newEnemy.id == e.id) {
              index = i;
            }
          });
          this.enemies[index] = data;
        });
    }
    this.formEnemy = {
      id: '',
      name: '',
      avatar: '',
      heathling: '',
      armure: '',
    };
  }
}
