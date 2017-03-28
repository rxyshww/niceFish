/**
 * Created by Black.ren on 2017/3/28.
 */

export const appRoutes = [
  {
    path:'',
    redirectTo:'posts',
    pathMatch:'full'
  },{
    path:'posts',
    loadChildren:'./home/home.module#HomeModule'
  }
];
