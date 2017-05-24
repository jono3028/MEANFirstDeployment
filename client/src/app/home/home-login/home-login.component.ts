import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeService } from "app/home/home.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  username: string // for form input

  constructor(private _homeService: HomeService, private _router: Router) { }
  
  ngOnInit() {
    this.username = ""
  }
  login () {
    this._homeService.login(this.username)
      .then(() => {this._router.navigate(['/messages'])
      })
      .catch((err) => {console.log(err)})
  }
}
