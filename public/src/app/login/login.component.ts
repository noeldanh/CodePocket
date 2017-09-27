import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegLoginService } from './reg-login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { routerTransition } from './../animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
})
export class LoginComponent implements OnInit {
  errors: string[]= [];
  l_error;


  constructor(
          private _loginService: RegLoginService,
          private _router: Router
  ) { }

  ngOnInit() {

  }


  login(formData){
      this._loginService.login(formData.value)
          .then( (user)=> {
            if (user == null){
              this.l_error = 'Email/Password failed'
            } else {
              this._router.navigate(['/dashboard'])
            }
          })
          .catch( (err) => console.log('this is an error'))
  }

  registration(regData){
    this._loginService.register(regData.value)
          .then( (user)=> {
            var arr = []
            // console.log(user.errmsg)
            if(user.errors || user.errmsg){
                if(user.errmsg){
                    // console.log(user.errmsg)
                    user.errmsg = 'Email already in the database'
                    arr.push(user.errmsg)
                    this.errors = arr
                } else {
                    for(var key in user.errors){
                        arr.push(user.errors[key].message)
                        this.errors = arr;
                        this.errors = this.errors
                        // console.log(this.errors)
                      }
              }
            } else{
              this._router.navigate(['/dashboard'])
            }
          })
          .catch( (err) => {console.log(err)})
  }
}
