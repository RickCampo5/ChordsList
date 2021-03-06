import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {ChordsService} from '../services/chords.service'
import {UpfirebaseService} from '../services/upfirebase.service'

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {

  id = ""
  chord:any = {}
  userId = JSON.parse(localStorage.getItem('userId'))
  edit = false
  file: any
  keys = []

  constructor(
    private activeRoute : ActivatedRoute,
    private chordsService: ChordsService,
    private router: Router,
    private upFirebaseService: UpfirebaseService
  ) { }


  onFileChange(e){
    this.file = e.target.files[0]
    this.upFirebaseService.uploadFile(this.file)
      .then(res=>{
        this.chord.audioURL = res
      })
  }

  saveSong(){
    this.chord.partiture = this.chord.partiture.replace(/\n/g, '<br>', )
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
