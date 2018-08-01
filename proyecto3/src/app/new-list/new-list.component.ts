import { Component, OnInit } from '@angular/core';
import {ListService} from '../services/list.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  constructor(
    private listService: ListService,
    private router: Router
  ) { }

  list: any = {}
  userId = JSON.parse(localStorage.getItem('userId'))

  saveList(){
    this.listService.createList(this.list)
    .subscribe(list=>{
      this.router.navigate(['profile'], this.userId)
    })
  }

  ngOnInit() {
  }

}
