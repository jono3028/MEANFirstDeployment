import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeWallComponent } from "./home/home-wall/home-wall.component";
import { HomeLoginComponent } from "./home/home-login/home-login.component";

const APP_ROUTES: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent }
  { path: '', component: HomeComponent ,
  children: [
    { path: '', component: HomeLoginComponent },
    { path: 'messages', component: HomeWallComponent },
  ]}
];
export const routing = RouterModule.forRoot(APP_ROUTES);

