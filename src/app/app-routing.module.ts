import { FormAddHeroComponent } from './components/form-add-hero/form-add-hero.component';
import { DetailHeroComponent } from './components/detail-hero/detail-hero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnemiesComponent } from './components/enemies/enemies.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes-component', component: HeroesComponent },
  { path: 'enemies-component', component: EnemiesComponent },
  {
    path: 'detail-hero-component/:heroId',
    component: DetailHeroComponent,
  },
  { path: 'add-hero', component: FormAddHeroComponent },
  { path: 'edit-hero/:heroId', component: DetailHeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
