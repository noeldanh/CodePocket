import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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
}
