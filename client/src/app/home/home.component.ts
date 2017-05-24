import { Component, OnInit } from '@angular/core';
import { HomeService } from "app/home/home.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signInStatus: string
  

  constructor(private _homeService: HomeService, private _router: Router) {
  }
  ngOnInit() { }
  checkStatus () {
    let temp = this._homeService.checkStatus()
    temp.then(data => {
      this.signInStatus = data.loggedIn
      console.log('Status: ',this.signInStatus)
      if (!this.signInStatus) {
        this._router.navigate(['/'])
      }
    })
  }
}
