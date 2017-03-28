/**
 * Created by Black.ren on 2017/3/28.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';

import { homeRoutes } from './home.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [],
  declarations: [
    HomeComponent
  ],
  providers: [],
})
export class HomeModule { }
