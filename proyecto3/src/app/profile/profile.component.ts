import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { ChordsService } from '../services/chords.service'
import {ListService} from '../services/list.service'
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
    private chordsService: ChordsService,
    private listService: ListService
  ) { }

  chords = []
  lists = []
  userId = JSON.parse(localStorage.getItem('userId'))

  createChords(){
    this.router.navigate(['createChords'])
  }

  createList(){
    this.router.navigate(['createList'])
  }

  ngOnInit() {
    if(!localStorage.getItem('user')){
      return this.router.navigate(['login'])
    }

    this.listService.getAllMyLists()
    .subscribe(lists=>{
      this.lists = lists
    })

    this.chordsService.getOneUserChords(this.userId)
    .subscribe(chords=>{
      this.chords = chords
    })
  }

}
