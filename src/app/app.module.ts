import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseApp, AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import {MatMenuModule} from '@angular/material/menu'; 
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatFormFieldControl} from '@angular/material';
import {MatButtonModule} from '@angular/material/button'; 



@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    AngularFireModule.initializeApp(environment.firebase, 'fire-storm'),
    AngularFireAuthModule,

    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
