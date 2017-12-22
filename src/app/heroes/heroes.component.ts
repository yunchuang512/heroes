import {Component, HostBinding, OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [
    '../componentcss/heroes.component.css'
  ]
})
export class HeroesComponent implements OnInit {
  viewtype = 1;
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    console.log('HeroesComponent Init');
    this.getHeroes();
    this.route.queryParams.subscribe(queryParams => {
      const temp = queryParams.viewtype;
      if (temp === '2') {
        this.viewtype = 2;
      } else {
        this.viewtype = 1;
      }
    });
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.router.navigate(['/detail'], {queryParams: {id: hero.id, viewtype: this.viewtype}});
  }

  changeview(viewtype): void {
    this.viewtype = viewtype;
  }

}
