import { Component, OnInit } from '@angular/core';
import { PostService } from './../post.service';
import { Post } from './../post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    // notes = [
    //     {title: 'first'},
    //     {title: 'second'}
    // ]
  posts: Array<Post>;

  constructor(private _postService: PostService) { }

  ngOnInit() {
      this.allPosts()
    //   this._postService.getPosts()
    //     .subscribe(res=> this.posts = res)
  }
  allPosts(){
      this._postService.getPosts()

        .then( (response) => this.posts = response )
        .catch( (err) => console.log(err) )
  }

}
