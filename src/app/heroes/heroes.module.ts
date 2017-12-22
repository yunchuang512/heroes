import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {HeroesRoutingModule} from './heroes-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule {
}

