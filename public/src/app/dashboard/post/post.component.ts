import { Component, OnInit } from '@angular/core';
import { routerTransition } from './../../animations';
import { PostService } from './../../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
})
export class PostComponent implements OnInit {

  constructor(private _postService: PostService, private _router: Router) { }

  ngOnInit() {
      this.getUserCurrent()
  }

  getUserCurrent(){
      this._postService.getCurrentUser()
          .then( (response) => console.log(response))
          .catch( (err) => this._router.navigate(['/']))
  }

  createP(postData){
      this._postService.createPost(postData.value)
        .then( (response)=> console.log('does createP in post ts work'))
        .catch( (err)=> console.log('error with creating post in ts file'))
  }

}
