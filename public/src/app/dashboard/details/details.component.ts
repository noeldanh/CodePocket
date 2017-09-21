import { Component, OnInit } from '@angular/core';
import { PostService } from './../../post.service';
import { Post } from './../../post';
import { Router, ActivatedRoute } from '@angular/router';
// import { routerTransition } from '../animations';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  post: Array<Post>;

  constructor(private _postService: PostService, private _route: ActivatedRoute) { }


  ngOnInit() {
    //   this._route.params.subscribe( (param) => {
    //       let id = params['id'];
      //
    //       this._postService.getPost(id)
    //         .subscribe(response => this.post = response);
    //   })
  }

}