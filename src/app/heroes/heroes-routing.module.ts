import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';

const heroesRoutes: Routes = [{
    path: 'heroes',
    component: HeroesComponent
  }, {
    path: 'detail',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [RouterModule]
})
export class HeroesRoutingModule {
}
