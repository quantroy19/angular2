import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { checkName, gte } from './gte.validator';

@Component({
  selector: 'app-form-add-hero',
  templateUrl: './form-add-hero.component.html',
  styleUrls: ['./form-add-hero.component.css'],
})
export class FormAddHeroComponent implements OnInit {
  heroId = 0;
  constructor(private http: HttpClient, private activaRoute: ActivatedRoute) {}

  newHero = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    avatar: new FormControl(),
    gender: new FormControl(1),
    attack: new FormControl('', [checkName]),
  });
  get name() {
    return this.newHero.get('name');
  }
  get attack() {
    return this.newHero.get('attack');
  }

  ngOnInit(): void {
    this.heroId = Number(this.activaRoute.snapshot.paramMap.get('heroId'));
    console.log(this.heroId);
    if (this.heroId !== 0) {
      this.http
        .get(`http://localhost:3000/heroes/${this.heroId}`)
        .subscribe((data) => {
          this.newHero.setValue(data);
        });
    }
  }
  errorFormHero = false;
  submitFormAdd() {
    // let newHero = {
    //   name: this.name.value,
    //   avatar: this.avatar.value,
    //   gender: this.gender.value,
    //   attack: this.attack.value,
    // };
    if (this.newHero.valid) {
      console.log(this.newHero);

      this.http
        .post<any>('http://localhost:3000/heroes/', this.newHero.value)
        .subscribe((data) => {
          // console.log(data);
        });
    } else {
      this.errorFormHero = true;
      alert('data co van de');
    }
  }
}
