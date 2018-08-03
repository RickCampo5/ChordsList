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

  today = new Date();
  stuff: Array<Object> = [];
  pattern: string;

  regex: String
  chords = {}

  ngOnInit() {
    this.chordsService.getAllChords()
    .subscribe(chords=>{
      this.chords = chords
    })

  }

}
