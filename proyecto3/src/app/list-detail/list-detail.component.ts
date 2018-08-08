import { Component, OnInit } from '@angular/core';
import {ListService} from '../services/list.service'
import {ActivatedRoute, Router} from '@angular/router'
import {ChordsService} from '../services/chords.service'

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  constructor(
    private listService: ListService,
    private chordService: ChordsService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  id = ""
  list: any = {}
  userId = JSON.parse(localStorage.getItem('userId'))
  edit = false
  chords = {}
  listChords = []
  url = window.location.href
  searchText:String
  user:any = {}

  editList(){
    this.edit = true
  }

  cancel(){
    this.edit = false
  }

  saveOnMyLists(){
    this.listService.saveLists(this.list, this.userId)
    .subscribe(list=>{
      this.router.navigate(['profile', this.userId])
    })
  }

  deleteOfMyLists(){
    this.listService.deleteOfMyLists(this.list, this.userId)
    .subscribe(list=>{
      this.router.navigate(['profile', this.userId])
    })
  }

  saveList(){
    this.list.chords = this.listChords
    this.listService.editOne(this.list)
    .subscribe(()=>{
      this.edit = false
    })
  }

  shareURL(){
    const copy = document.getElementById('copyURL') as HTMLInputElement
    copy.select();
    document.execCommand('copy')
  }

  add(chord){
    this.listChords = this.list.chords
    this.listChords.push(chord)
  }

  rest(chord){
    let index = this.list.chords.indexOf(chord)
    this.list.chords.splice(index, 1)
    this.listChords = this.list.chords
  }

  deleteList(id){
    if(!window.confirm('Estas seguro?')) return
    this.listService.deleteOne(id)
    .subscribe(()=>{
      this.router.navigate(['profile', this.userId])
    })
  }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id

      this.listService.getOneList(this.id)
      .subscribe(list=>{
        this.list = list
      })
    })

    this.chordService.getAllChords()
    .subscribe(chords=>{
      this.chords = chords
    })

    this.chordService.getUser(this.userId)
    .subscribe(user=>{
      this.user = user
    })
  }

}
