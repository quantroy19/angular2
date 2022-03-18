import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Hero } from '../../models/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Array<Hero> = [];
  formHero = new Hero();

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/heroes/').subscribe((data) => {
      this.heroes = data;
    });
  }
  remove(hero: Hero): void {
    this.http
      .delete(`http://localhost:3000/heroes/${hero.id}`)
      .subscribe((data) => {
        this.heroes = this.heroes.filter((item) => item.id !== hero.id);
      });
  }
  edit(hero: Hero): void {
    this.formHero = { ...hero };
  }
  submitForm() {
    const newHero = { ...this.formHero };
    if (isNaN(newHero.id)) {
      this.http
        .post<Hero>('http://localhost:3000/heroes/', newHero)
        .subscribe((data) => {
          this.heroes.push(data);
        });
    } else {
      console.log(this.formHero);
      this.http
        .put<Hero>(`http://localhost:3000/heroes/${newHero.id}`, newHero)
        .subscribe((data) => {
          let index = -1;
          this.heroes.forEach((e, i) => {
            if (newHero.id == e.id) {
              index = i;
            }
          });
          this.heroes[index] = data;
        });
    }
    this.formHero = new Hero();
  }
}
