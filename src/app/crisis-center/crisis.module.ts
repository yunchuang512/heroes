import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CrisisCenterRoutingModule} from './crisis-center-routing.module';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisCenterHomeComponent} from './crisis-center-home.component';
import {CrisisListComponent} from './crisis-list.component';
import {CrisisService} from './crisis.service';
import {CrisisCenterComponent} from './crisis-center.component';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisDetailComponent,
    CrisisCenterHomeComponent,
    CrisisListComponent,
    CrisisCenterComponent
  ],
  providers: [
    CrisisService
  ]
})
export class CrisisModule {
}

