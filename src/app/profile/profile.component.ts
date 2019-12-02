import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser = "";

  constructor(private authService: AuthService) {
    try {
      this.loggedUser = JSON.parse(localStorage.getItem('user')).email;
    } catch (e) {
      this.loggedUser = "Please Login"
    }
   }

  ngOnInit() {
  } 

}
