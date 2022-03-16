import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { EnemiesComponent } from './enemies/enemies.component';

const routes: Routes = [
  { path: 'heroes-component', component: HeroesComponent },
  { path: 'enemies-component', component: EnemiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
