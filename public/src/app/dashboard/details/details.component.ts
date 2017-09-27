import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './../../post.service';
import { Post } from './../../post';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from './../../animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
})
export class DetailsComponent implements OnInit {
  // @Input() myPost;
  // post: Array<Post>;
  // postId;

  constructor(private _postService: PostService, private _route: ActivatedRoute) { }


  ngOnInit() {
    //   this._route.params.subscribe( (param) => {
    //       let id = param['id'];
    //       this.postId = id
    //   })
  }

  // getUserPost(id){
    //   this._postService.getPost(id)
    //     .then( (response) => console.log(response))
    //     .catch( (err) => console.log('error finding single post'))
  // }
}
