import { Component, OnInit } from '@angular/core';
import {ListService} from '../services/list.service'
import {Router} from '@angular/router'
import {ChordsService} from '../services/chords.service'

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  constructor(
    private listService: ListService,
    private router: Router,
    private chordsService: ChordsService
  ) { }

  list: any = {}
  userId = JSON.parse(localStorage.getItem('userId'))
  chords = []
  listChords = []

  saveList(){
    this.list.chords = this.listChords
    this.listService.createList(this.list)
    .subscribe(list=>{
      this.router.navigate(['profile', this.userId])
    })
  }

  add(chord){
    this.listChords.push(chord._id)
    var node = document.createElement('p')
    var div = document.getElementById('songs')
    node.innerHTML = `${chord.title} - ${chord.author}`
    div.appendChild(node)
  }

  ngOnInit() {
    this.chordsService.getAllChords()
      .subscribe(chords=>{
        this.chords = chords
      })
    
  }

}
