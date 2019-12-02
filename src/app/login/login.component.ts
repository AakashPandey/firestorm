import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userEmail = "";
  userPassword = "";

  constructor(private authService: AuthService) {
    
  }

  ngOnInit() {
  }

  checkLogin() {
    this.authService.login(this.userEmail, this.userPassword);
    console.log('Login called');
    this.userEmail = "";
    this.userPassword = "";
  }

}
