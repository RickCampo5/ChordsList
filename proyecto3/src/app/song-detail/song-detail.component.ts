import { Component, OnInit, Pipe, PipeTransform,  } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser"
import {ActivatedRoute, Router} from '@angular/router'
import {ChordsService} from '../services/chords.service'

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

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

  constructor(
    private activeRoute : ActivatedRoute,
    private chordsService: ChordsService,
    private router: Router
  ) { }

  // onFileChange(e){
  //   this.file = e.target.files[0]
  // }

  saveSong(){
    // const form = new FormData()
    // form.append('audioURL', this.file)
    // console.log(form)
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
