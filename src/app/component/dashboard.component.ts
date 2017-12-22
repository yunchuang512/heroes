import {Component, OnInit} from '@angular/core';
import {Hero} from '../heroes/hero';
import {HeroService} from '../heroes/hero.service';
import {Http, ResponseContentType} from '@angular/http';

@Component({
  selector: 'my-dashboard',
  templateUrl: '../template/dashboard.component.html',
  styleUrls: [
    '../componentcss/dashboard.component.css'
  ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private http: Http) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }


  buttonClick(): void {
    var datass = {key: 123};
    this.http.post('http://192.168.0.103:8080/', JSON.stringify(datass), {
      method: 'post',
      withCredentials: true
    }).toPromise()
      .then(response => {
        console.log(response.json());
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}




