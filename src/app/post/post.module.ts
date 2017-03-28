import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ng2-bootstrap';

import { PostlistComponent } from './postlist/postlist.component';
import { PostlistService } from './postlist/services/postlist.service';

import { postRoutes } from './post.routes';

@NgModule({
    imports: [
      SharedModule,
      PaginationModule.forRoot(),
      RouterModule.forChild(postRoutes)
    ],
    exports: [],
    declarations: [
      PostlistComponent
    ],
    providers: [
      PostlistService
    ]
})
export class PostModule { }
