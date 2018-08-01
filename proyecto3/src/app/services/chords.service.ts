import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class ChordsService{
    url = "http://localhost:3000/chords/"
    constructor(private http:Http){}

    //get all phones
    getAllChords(){
        return this.http.get(this.url).toPromise()
        .then((res: Response)=> res.json())
        .catch(e=>console.log(e))                        
    }

    //get one user Chords
    getOneUserChords(userid){
      return this.http.get(this.url + userid)
      .pipe(map((res: Response)=>res.json()));
    }

    //get one phone
    getOneChord(id){
        return this.http.get(this.url + 'one/' + id)
            .pipe(map((res: Response)=>res.json()));                                
    }

    //create one phone
    createChord(obj){
        return this.http.post(this.url, obj)
            .pipe(map((res: Response)=>res.json()))                                                             
    }    
        
    //edit one phone
    editOneChord(obj){
    return this.http.put(this.url + obj._id, obj) 
        .pipe(map((res: Response)=>res.json()))    
    }    

    //delete one phone richard
    deleteChord(id){
        return this.http.delete(this.url + id)
            .pipe(map((res: Response)=>res.json()))                                                                


    }    
    

}
