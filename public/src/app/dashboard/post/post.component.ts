
import { Component, OnInit } from '@angular/core';
import { routerTransition } from './../../animations';
import { PostService } from './../../post.service';
import { Router } from '@angular/router';
import { userPost } from './../userPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
})
export class PostComponent implements OnInit {
  uPost = new userPost();
  // posts = [];
  constructor(private _postService: PostService, private _router: Router) { }


  ngOnInit() {
      this.getUserCurrent()
  }

  getUserCurrent(){
      this._postService.getCurrentUser()
          .then( (response) => console.log(response))
          .catch( (err) => this._router.navigate(['/']))
  }

  createP(){
      this.uPost;
      this._postService.createPost(this.uPost)
        .then( (response)=> {
            this._router.navigate(['/dashboard'])
        })
        .catch( (err)=> console.log('error with creating post in ts file'))
  }

}
