import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class PostService {

  constructor(private _http: Http) { }
// return this._http.get('/pups').map(data=> data.json()).toPromise();
  getPosts() {
      return this._http.get('/api/posts')
        .map(data => data.json()).toPromise()
  }

  getPost(id) {
      return this._http.get('/api/posts/'+id)
        .map(data => data.json()).toPromise()
  }

  getCurrentUser(){
  // console.log('hello?')
  return this._http.get('/api/current')
      .map(data => data.json()).toPromise()
  }

  createPost(data){
      return this._http.post('/api/posts', data)
          .map(data => data.json()).toPromise()
  }

  showUserPost(){
      return this._http.get('/api/userPost')
        .map(data => data.json()).toPromise()
  }

}

// showUserPost
