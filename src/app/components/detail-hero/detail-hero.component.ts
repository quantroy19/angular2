import { HttpClient } from '@angular/common/http';
import { Hero } from './../../models/Hero';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css'],
})
export class DetailHeroComponent implements OnInit {
  heroId = 0;
  getHeroById = new Hero();
  formHero = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    avatar: new FormControl(),
    gender: new FormControl(),
    attack: new FormControl(),
  });
  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.heroId = Number(this.activeRoute.snapshot.paramMap.get('heroId'));
    this.http
      .get<any>(`http://localhost:3000/heroes/${this.heroId}`)
      .subscribe((data) => {
        // console.log(data);
        this.formHero.setValue(data);
      });
  }
  editFormHero(): void {
    this.http
      .put(`http://localhost:3000/heroes/${this.heroId}`, this.formHero.value)
      .subscribe((data) => {
        console.log(data);
        this.route.navigate(['heroes-component']);
      });
  }
}
