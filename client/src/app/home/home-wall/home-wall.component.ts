import { Component, OnInit } from '@angular/core';
import { HomeService } from "../home.service";
import { Message } from "../message";
import { Http } from "@angular/http";
import { Router } from "@angular/router";

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
    this._homeService.getAll()
      .then(data => {this.allMessages = data})
      .catch((err) => {console.log(err)})
    console.log('wall 0-----',this.allMessages)
  }
  ngOnInit() {
  }
  postNewMessage () {
    this._homeService.newMessage(this.newMessage)
  }
  logOut () {
    this._homeService.logout()
    this._router.navigate(['/'])
  }
}
