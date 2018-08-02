import { Component, OnInit } from '@angular/core';
import {ChordsService} from '../services/chords.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private chordsService: ChordsService,
    private activeRoute: ActivatedRoute
  ) { }

  obj={regex: String}
  chords = {}

  ngOnInit() {
    this.obj.regex = this.activeRoute.snapshot.params['reg']
    console.log(this.obj.regex)
    this.chordsService.searchChords(this.obj)
    .subscribe(chords=>{
      console.log(chords)
      this.chords = chords
    })
  }

}
