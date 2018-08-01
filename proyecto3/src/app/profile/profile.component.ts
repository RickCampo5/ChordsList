import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { ChordsService } from '../services/chords.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private chordsService: ChordsService
  ) { }

  chords = []

  crear(){
    this.router.navigate(['createChords'])
  }

  ngOnInit() {
    if(!localStorage.getItem('user')){
      return this.router.navigate(['login'])
    }

    this.chordsService.getOneUserChords(JSON.parse(localStorage.getItem('userId')))
    .subscribe(chords=>{
      this.chords = chords
    })
  }

}
