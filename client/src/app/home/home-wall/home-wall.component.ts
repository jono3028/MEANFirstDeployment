import { Component, OnInit } from '@angular/core';
import { HomeService } from "../home.service";
import { Message } from "../message";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { NgForm} from "@angular/forms"

@Component({
  selector: 'app-home-wall',
  templateUrl: './home-wall.component.html',
  styleUrls: ['./home-wall.component.css']
})
export class HomeWallComponent implements OnInit {

  allMessages: Message[]
  newMessage: Message
  newComment: Comment

  constructor(private _homeService: HomeService, private _router: Router) {
    this.newMessage = new Message
    this.refreshMessages()
  }
  ngOnInit() {
  }
  postNewMessage () {
    this._homeService.newMessage(this.newMessage)
    this.refreshMessages()
  }
  postNewComment(form: NgForm, id: string) {
    this._homeService.newComment(form.value.newComment, id)
      .then(() => {
        this.refreshMessages()
      })
      .catch((err) => {console.log(err)})
  }
  logOut () {
    this._homeService.logout()
    this._router.navigate(['/'])
  }
  refreshMessages () {
    this._homeService.getAll()
      .then(data => {
        this.allMessages = data
      })
      .catch((err) => {console.log(err)})
  }
}
