import { Injectable } from '@angular/core';
import * as firebase from 'firebase'


const config = {
  apiKey: "AIzaSyClBqgzTdqKPbhNv6ZhrKcBxRuX69eAc4I",
  authDomain: "chordslist-212320.firebaseapp.com",
  databaseURL: "https://chordslist-212320.firebaseio.com",
  projectId: "chordslist-212320",
  storageBucket: "chordslist-212320.appspot.com",
  messagingSenderId: "779337727068"
};
firebase.initializeApp(config);

@Injectable({
  providedIn: 'root'
})
export class UpfirebaseService {

  constructor() { }

  uploadFile(file){
    let task;
    task = firebase.storage().ref('/audios').put(file)

    return task.snapshot.ref.getDownloadURL()
      // .then((snap:any)=>{
      //   task.snapshot.ref.getDownloadURL()
      //     .then(r=>{
      //       console.log(r)
      //     })
      //   //return snap.task.uploadUrl_
      // })
    // task.on('state_changed', (snap)=>{
    //   console.log(snap)
    //   // let progress = (snap.bytesTransferred/snap.totalBytes)*100
    //   // console.log(progress)
    // })
  }
}
