import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  url="http://localhost:3000/lists/"
  userId = JSON.parse(localStorage.getItem('userId'))
  lists = []

  constructor(
    private http: Http
  ) { }

  getAllMyLists(){
    return this.http.get(this.url, this.userId)
    .pipe(map((res:Response)=>res.json()))
  }

  getAllSavedLists(){
    return this.http.get(this.url + 'savedLists/', this.userId)
    .pipe(map((res:Response)=>res.json()))
  }

  getOneList(id){
    return this.http.get(this.url + 'one/', id)
    .pipe(map((res:Response)=>res.json()))
  }

  createList(obj){
    return this.http.post(this.url, obj)
    .pipe(map((res:Response)=>res.json()))
  }

  editOne(obj){
   return this.http.put(this.url + obj._id, obj)
    .pipe(map((res:Response)=>res.json()))
  }

  deleteOne(id){
    return this.http.delete(this.url + id)
    .pipe(map((res:Response)=>res.json()))
  }

}
