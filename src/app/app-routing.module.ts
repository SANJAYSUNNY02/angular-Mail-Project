import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { GmailnavComponent } from './gmailnav/gmailnav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path:"",
    component:GmailnavComponent
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"addUser",
    component:AddUserComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
