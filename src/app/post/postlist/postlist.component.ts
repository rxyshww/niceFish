import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { PostlistService } from './services/postlist.service';
import { Post } from '../model/post-model';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  //页面限制数量
  maxSize:number = 5;
  //每页的数量限制
  itemsPerPage:number = 5;
  //当前页的页码
  currentPage:number = 1;
  //列表元素总数
  totalItems:number;
  //搜索的内容
  searchText:string;
  searchTextStream: Subject<string> = new Subject<string>();
  //请求的订单列表
  postList: Array<Post>;

  constructor(
    private router,
    private activeRoute: ActivatedRoute,
    private postService: PostlistService
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      // 这里可以从路由里面获取URL参数
      console.log(params);
      this.loadData(this.searchText,this.currentPage);
    });

    this.searchTextStream
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(searchText => {
        console.log(this.searchText);
        this.loadData(this.searchText,this.currentPage)
      });
  }

  loadData(searchText: string, page: number) {
    let offset = (this.currentPage-1)*this.itemsPerPage;
    let end = (this.currentPage)*this.itemsPerPage;

    return this.postService.getPostList(searchText, page).subscribe(
      res=>{
        this.totalItems = res["total"];
        //TODO.正式环境中，需要去掉slice
        this.postList = res["items"].slice(offset,end>this.totalItems?this.totalItems:end);
      },
      error => {console.log(error)},
      () => {}
    );
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
}
