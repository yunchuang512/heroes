import {Component, Host, HostBinding, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [
    '../componentcss/hero-detail.component.css'
  ]
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;
  viewtype: string;

  constructor(private heroSerivce: HeroService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.viewtype = queryParams.viewtype;
      this.heroSerivce.getHero(+queryParams.id).then(hero => {
        this.hero = hero;
      });
    });
  }

  goBack(): void {
    this.router.navigate(['/heroes'], {queryParams: {viewtype: this.viewtype}});
  }

}
