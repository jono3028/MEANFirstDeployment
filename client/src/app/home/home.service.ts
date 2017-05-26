import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs'

const HEADERS = new Headers({ "Content-Type": "application/json"})
const OPTIONS = new RequestOptions({ headers: HEADERS })

@Injectable()
export class HomeService {



  constructor(private _http: Http) { }
  login (username) {
    console.log(username)
    return this._http
      .post('/login', {username: username}, OPTIONS)
      .toPromise()
  }
  logout () {
    console.log('Logout----')
    return this._http
      .get('/logout')
      .toPromise()
    
  }
  getAll () {
    return this._http
      .get('/getAll')
      .map(data => data.json())
      .toPromise()
  }
  newMessage (newMessage) {
    console.log(newMessage)
    return this._http
      .post('/newMessage', newMessage, OPTIONS)
      .toPromise()
  }
  newComment (newComment, id) {
    console.log('Comment: ' + newComment + ' ID: ' + id)
    return this._http
      .post(`/${id}/newComment`, {newComment: newComment}, OPTIONS)
      .toPromise()
  }
  checkStatus () {
    return this._http
      .get('/checkStatus')
      .map(data => data.json())
      .toPromise()
  }
}
