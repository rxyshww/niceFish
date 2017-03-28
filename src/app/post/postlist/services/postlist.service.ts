/**
 * Created by Black.ren on 2017/3/28.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post } from '../../model/post-model';

@Injectable()
export class PostlistService {
  postListURL = 'src/mock-data/postlist-mock.json';
  postListSearchURL = 'src/mock-data/postlist-search-mock.json';

  constructor(
    private http: Http
  ) {}

  getPostList(searchText: string,page:number=1):Observable<Post[]> {
    let url = this.postListURL;
    let params = new URLSearchParams();
    if (searchText) {
      params.set('searchText', searchText);
      url = this.postListSearchURL;
      console.log(`searchText=${searchText}`);
    }
    params.set('page', String(page));
    return this.http
      .get(url,{search:params})
      .map((res:Response) => {
        let result=res.json();
        console.log(result);
        return result;
      })
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}
