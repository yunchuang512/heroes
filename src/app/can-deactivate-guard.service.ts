import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {CrisisDetailComponent} from './crisis-center/crisis-detail.component';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CrisisDetailComponent> {
  canDeactivate(component: CrisisDetailComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //console.log(currentState.url);
    if (!component.crisis || component.crisis.name === component.editName) {
      return true;
    }
    return component.dialogService.confirm('Discard changes?');
  }

}
