import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class RegLoginService {

  constructor(private _http: Http) { }

  login(user){
      return this._http.post('/api/login', user)
          .map( (response: Response) => response.json())
          .toPromise()
  }

  register(newUser){
      return this._http.post('/api/register', newUser)
          .map( (response: Response) => response.json())
          .toPromise()
  }


}
