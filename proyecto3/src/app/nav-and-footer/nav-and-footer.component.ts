import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-nav-and-footer',
  templateUrl: './nav-and-footer.component.html',
  styleUrls: ['./nav-and-footer.component.css']
})
export class NavAndFooterComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  user = JSON.parse(localStorage.getItem('userId'));

  logout(){
    this.auth.logout();
    this.router.navigate(['login'])
  }

  ngOnInit() {
  }

}
