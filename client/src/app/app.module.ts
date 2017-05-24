import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from "./home/home.service";
import { routing } from "./app.router";
import { HomeLoginComponent } from './home/home-login/home-login.component';
import { HomeWallComponent } from './home/home-wall/home-wall.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeLoginComponent,
    HomeWallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
