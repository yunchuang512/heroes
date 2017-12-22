import {RouterModule, Routes} from '@angular/router';
import {CrisisListComponent} from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {NgModule} from '@angular/core';
import {CrisisCenterComponent} from './crisis-center.component';
import {CanDeactivateGuard} from '../can-deactivate-guard.service';
import {CrisisDetailResolver} from './crisis-center-detail-resolver.service';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
      }, {
        path: 'detail',
        component: CrisisDetailComponent,
        canDeactivate: [CanDeactivateGuard],
        resolve: {
          crisis: CrisisDetailResolver
        }
      }
    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CrisisDetailResolver
  ]
})
export class CrisisCenterRoutingModule {
}
