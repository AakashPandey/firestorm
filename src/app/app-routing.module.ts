import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

import { ProfileGuard } from './profile/profile.guard';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },

  {
    path:'profile',
    component: ProfileComponent,
    canActivate: [ProfileGuard]  
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
