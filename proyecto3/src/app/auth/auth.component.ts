import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLogged = true
  auth = {}
  user = null

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  signup(){
    this.authService.signup(this.auth)
    .subscribe(user=>{
      this.user = user
    })
  }

  login(){
    this.authService.login(this.auth)
    .subscribe(user=>{
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
      this.router.navigate(['profile'])
    })
  }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['profile'])
    }
  }

}
