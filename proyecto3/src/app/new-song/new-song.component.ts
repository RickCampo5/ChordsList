import { Component, OnInit } from '@angular/core';
import {ChordsService} from '../services/chords.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.component.html',
  styleUrls: ['./new-song.component.css']
})
export class NewSongComponent implements OnInit {

  chords: any = {}
  userId = localStorage.getItem('userId')

  constructor(
    private chordsService: ChordsService,
    private router: Router
  ) { }

  saveSong(){
    this.chordsService.createChord(this.chords)
    .subscribe(song=>{
      this.router.navigate(['profile', JSON.parse(this.userId)])
    })
  }

  ngOnInit() {
  }

}
