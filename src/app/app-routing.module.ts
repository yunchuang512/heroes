import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HeroDetailComponent} from './heroes/hero-detail.component';
import {DashboardComponent} from './component/dashboard.component';
import {TimelineHomeComponent} from './component/timeline-home.component';
import {AppHomeComponent} from './component/app.home.component';
import {PageNotFoundComponent} from './component/page-not-found.component';
import {ComposeMessageComponent} from './message/compose-message.component';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import {AuthGuard} from './auth-guard';

const routes: Routes = [
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis.module#CrisisModule'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'apphome',
    component: AppHomeComponent
  }, {
    path: 'timeline',
    component: TimelineHomeComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'detail/:id',
    component: HeroDetailComponent
  }, {
    path: '',
    redirectTo: '/apphome',
    pathMatch: 'full'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: [
    CanDeactivateGuard
  ]
})
export class AppRoutingModule {
}
