/**
 * Created by Black.ren on 2017/3/28.
 */

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const homeRoutes=[
  {
    path:'',
    component:HomeComponent,
    children: [
      {
        path: '',
        loadChildren: '../post/post.module#PostModule'
      }
    ]
  }
];
