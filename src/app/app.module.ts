import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HeroService} from './heroes/hero.service';
import {AppComponent} from './app.component';
import {DashboardComponent} from './component/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {TimelineHomeComponent} from './component/timeline-home.component';
import {TimelineItemComponent} from './component/timeline-item.component';
import {TimeitemService} from './serivice/timeitem.service';
import {AppHomeComponent} from './component/app.home.component';
import {PageNotFoundComponent} from './component/page-not-found.component';
import {HeroesModule} from './heroes/heroes.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {ComposeMessageComponent} from './message/compose-message.component';
import {DialogService} from './dialog.service';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    LoginRoutingModule,
    AppRoutingModule,
    HttpModule,
    NgxEchartsModule
  ],
  declarations: [
    AppComponent,
    AppHomeComponent,
    DashboardComponent,
    TimelineHomeComponent,
    TimelineItemComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    LoginComponent
  ],
  providers: [
    HeroService,
    TimeitemService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

