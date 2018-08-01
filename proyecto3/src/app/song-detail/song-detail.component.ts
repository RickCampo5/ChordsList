import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {ChordsService} from '../services/chords.service'
import { subscribeOn } from '../../../node_modules/rxjs/operators';


@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {

  id = ""
  chord = {}
  userId = JSON.parse(localStorage.getItem('userId'))
  edit = false

  constructor(
    private activeRoute : ActivatedRoute,
    private chordsService: ChordsService,
    private router: Router
  ) { }

  saveSong(){
    this.chordsService.editOneChord(this.chord)
    .subscribe(()=>{
      this.edit = false
    })
  }

  editSong(){
    this.edit = true
  }

  cancel(){
    this.edit = false
  }

  deleteSong(id){
    if(!window.confirm('Estas seguro?')) return
    this.chordsService.deleteChord(id)
    .subscribe(()=>{
      this.router.navigate(['profile', this.userId])
    })
  }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
     this.id =  params.id

     this.chordsService.getOneChord(this.id)
     .subscribe(chord=>{
       this.chord = chord
     })
    })
  }

}
