import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class ChordsService{
    url = "http://localhost:3000/apichords/"
    // url = '/apichords/'
    constructor(private http:Http){}

    //get all Chords
    getAllChords(){
        return this.http.get(this.url)
        .pipe(map((res:Response)=>res.json()))                     
    }

    //get User
    getUser(id){
        return this.http.get(this.url + 'get/' + id)
        .pipe(map((res:Response)=>res.json()))
    }

    //get one user Chords
    getOneUserChords(userid){
      return this.http.get(this.url + userid)
      .pipe(map((res: Response)=>res.json()));
    }

    //get one Chord
    getOneChord(id){
        return this.http.get(this.url + 'one/' + id)
            .pipe(map((res: Response)=>res.json()));                                
    }

    //Search Chords
    searchChords(obj){
        return this.http.post(this.url + 'search/songs', obj)
        .pipe(map((res:Response)=>res.json()))
    }

    //create one Chord
    createChord(obj){
        return this.http.post(this.url, obj)
            .pipe(map((res: Response)=>res.json()))                                                             
    }    
        
    //edit one Chord
    editOneChord(obj){
    return this.http.put(this.url + obj._id, obj) 
        .pipe(map((res: Response)=>res.json()))    
    }    

    //delete one Chord 
    deleteChord(id){
        return this.http.delete(this.url + id)
            .pipe(map((res: Response)=>res.json()))                                                                


    }    
    

}
