import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegLoginService } from './reg-login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginErrors = [];

  constructor(private _loginService: RegLoginService, private _router: Router) { }

  ngOnInit() { }

  // login(formData) {
  //     console.log(formData.email)
  //     this.email = formData.email
  //     this.password = formData.password
  //
  // }

  // registration(regData){
  //   this._loginService.register(regData.value)
  //         .then( (user)=> {
  //           var arr = []
  //           // console.log(user.errmsg)
  //           if(user.errors || user.errmsg){
  //               console.log(user.errors)
  //               if(user.errmsg){
  //                   // console.log(user.errmsg)
  //                   user.errmsg = 'Email already in the database'
  //                   arr.push(user.errmsg)
  //                   this.errors = arr
  //               } else {
  //                   for(var key in user.errors){
  //                       arr.push(user.errors[key].message)
  //                       this.errors = arr;
  //                       this.errors = this.errors
  //                       // console.log(this.errors)
  //                     }
  //             }
  //           } else{
  //             this._router.navigate(['/dashboard'])
  //           }
  //         })
  //         .catch( (err) => {console.log(err)})
  // }
  registration(regData) {
      this._loginService.register(regData.value)
        .then( (res) => {
            if(res.errors){
                console.log(res.errors.)
            }
        })
        .catch( (err) => console.log(err))
  }
}
