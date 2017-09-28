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
  postId;
  singlePost;

  constructor(private _postService: PostService, private _route: ActivatedRoute, private _router: Router) { }


  ngOnInit() {
      this._route.params.subscribe( (param) => {
          let id = param['id'];
          this.postId = id
          console.log(this.postId)
      })
      this.getUserPost(this.postId)
    //   this.deletePost(this.postId)
  }

  getUserPost(id){
      this._postService.getPost(id)
        .then( (response) => this.singlePost = [response])
        .catch( (err) => console.log('error finding single post'))
  }

  deletePost(id){
       this._postService.deletePost(id)
            .then( (response)=> this._router.navigate(['/dashboard']))
            .catch( (err)=> console.log('didnt update'))
    }
}

// deletePost
