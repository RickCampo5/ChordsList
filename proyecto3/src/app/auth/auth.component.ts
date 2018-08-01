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
  user: any = {}

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  signup(){
    this.authService.signup(this.auth)
    .subscribe(user=>{
      this.user = user
      this.router.navigate(['profile', this.user._id])
    })
  }

  login(){
    this.authService.login(this.auth)
    .subscribe(user=>{
      this.user = user
      const userId = this.user._id
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('userId', JSON.stringify(userId))
      this.router.navigate(['profile', this.user._id])
    })
  }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['profile', this.user._id])
    }
  }

}
