import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {Router} from '@angular/router'
import {ChordsService} from '../services/chords.service'

@Component({
  selector: 'app-nav-and-footer',
  templateUrl: './nav-and-footer.component.html',
  styleUrls: ['./nav-and-footer.component.css']
})
export class NavAndFooterComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService,
    private chordsService: ChordsService
  ) { }

  obj: any = {}
  user:any ={}
  userId = JSON.parse(localStorage.getItem('userId'))
  chords = {}


  sideNav(){
    const nav = document.getElementById("sideNav")
    nav.style.display = "inherit"
  }

  logout(){
    this.auth.logout();
    // this.userId = false
    this.router.navigate(['chords/'])
  }

  ngOnInit() {
    this.chordsService.getUser(this.userId)
    .subscribe(user=>{
      this.user = user
    })
  }

}

// 
