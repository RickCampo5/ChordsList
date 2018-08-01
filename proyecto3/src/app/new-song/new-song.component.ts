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
  userId = JSON.parse(localStorage.getItem('userId'))

  constructor(
    private chordsService: ChordsService,
    private router: Router
  ) { }

  saveSong(){
    this.chords.partiture = this.chords.partiture.replace(/\n/g, '<br>', )
    this.chordsService.createChord(this.chords)
    .subscribe(song=>{
      this.router.navigate(['profile', this.userId])
    })
  }

  ngOnInit() {
  }

}
