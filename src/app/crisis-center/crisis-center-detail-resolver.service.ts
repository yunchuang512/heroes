import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Crisis} from './crisis';
import {CrisisService} from './crisis.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis> {
  constructor(private crisisService: CrisisService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> | Promise<Crisis> | Crisis {
    console.log('Loading Crisis Detail...');
    const id = parseInt(route.queryParams.id);
    return this.crisisService.getCrisisById(id).then(crisis => {
      if (crisis) {
        return crisis;
      } else {
        this.router.navigate(['./crisis-center']);
        return null;
      }
    });
  }

}
