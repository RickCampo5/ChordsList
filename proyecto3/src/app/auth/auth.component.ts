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
  auth:any = {}
  user: any = {}
  pass = false
  emailAcc = false
  created = false
  

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  signup(){
    if(this.pass && this.emailAcc){
      this.authService.signup(this.auth)
      .subscribe(user=>{
        this.user = user
        this.created = true
        this.isLogged = true
      })
    }
  }

  confirmation(){
    const passwordError = document.getElementById("passwordError")
    const emailError = document.getElementById("emailError")
    if(this.auth.email.indexOf("@") != -1 ) {
      emailError.style.display = "none"
      this.emailAcc = true
    }
    if(this.auth.email.indexOf("@") == -1){
      emailError.style.display = "inherit"
      this.emailAcc = false
    }
    if (this.auth.password.length < 6) {
      passwordError.style.display = "inherit"
      this.pass = false
    } 
    if(this.auth.password.length >= 6) {
      passwordError.style.display = "none"
      this.pass = true
    }
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
