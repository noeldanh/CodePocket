import { Component, OnInit } from '@angular/core';
import { PostService } from './../post.service';
import { Router } from '@angular/router';
import { Post } from './../post';
// import { routerTransition } from './../../animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // animations: [routerTransition],
  // host: {'[@routerTransition]': ''}
})
export class DashboardComponent implements OnInit {
    // notes = [
    //     {title: 'first'},
    //     {title: 'second'}
    // ]
  posts: Array<Post>;

  constructor(private _postService: PostService, private _router: Router) { }

  ngOnInit() {
      this.allPosts()
      this.getUserCurrent()
  }

  getUserCurrent(){
      this._postService.getCurrentUser()
          .then( (response) => console.log(response))
          .catch( (err) => this._router.navigate(['/']))
  }

  allPosts(){
      this._postService.getPosts()

        .then( (response) => this.posts = response )
        .catch( (err) => console.log(err) )
  }

}
