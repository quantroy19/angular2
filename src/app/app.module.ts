import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeroesComponent } from './components/heroes/heroes.component';
import { EnemiesComponent } from './components/enemies/enemies.component';
import { FormHeroComponent } from './components/form-hero/form-hero.component';
import { HeroItemComponent } from './components/hero-item/hero-item.component';
import { GenderPipe } from './helpers/pipe/gender.pipe';
import { EnemyItemComponent } from './components/enemy-item/enemy-item.component';
import { FormEnemyComponent } from './components/form-enemy/form-enemy.component';
import { DetailHeroComponent } from './components/detail-hero/detail-hero.component';
import { FormAddHeroComponent } from './components/form-add-hero/form-add-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    EnemiesComponent,
    FormHeroComponent,
    HeroItemComponent,
    GenderPipe,
    EnemyItemComponent,
    FormEnemyComponent,
    DetailHeroComponent,
    FormAddHeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
